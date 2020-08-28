const Service = require("../models/Service")
const CountywideService = require("../models/CountywideService")
const haversine = require("haversine")
const parseDataUri = require('parse-data-uri')
const csv = require('csv');

const backOfficeFields = {
    _id: 0,
    reviewDate: 0,
    reviewStatus: 0,
    reviewNotes: 0,
    cloNotes: 0,
    reviewNumber: 0,
    assignedTo: 0,
    lafArea: 0,
    ccgLocality: 0,
    volDbsCheck: 0,
    safeguarding: 0,
    healthSafety: 0,
    insurance: 0,
    legacyCategories: 0,
    __v: 0
}

// Turn semicolon-delimited strings into arrays, make every element lowercase and remove empty string elements
const to_array_from_comma = string => {
    return string.toLowerCase()
        .replace(' ', '')
        .split(",")
        .filter(Boolean)
}

module.exports = {
    list: async (req, res, next)=>{

        let query = {}

        // Only show published results
        query.reviewStatus = { $ne: "Unpublish" }
        // Only show results where geo isn't null
        query.geo = { $ne: null }

        if(req.query.category && req.query.keywords){
            query.$or = [
                {category: { $in: [].concat(req.query.category) }},
                {keywords: { $elemMatch: { $in: [].concat(req.query.keywords) } }}
            ]
        } else {
            if(req.query.category) query.category = { $in: [].concat(req.query.category) }
            if(req.query.keywords) query.keywords = { $elemMatch: { $in: [].concat(req.query.keywords) } }
        }

        if(req.query.days) query.days = { $in: [].concat(req.query.days) }
        if(req.query.age) query.ageGroups = { $all: [].concat(req.query.age) }
        if(req.query.accessibility) query.accessibility = { $all: [].concat(req.query.accessibility) }
        // Spin off a second query object, because .countDocuments doesn't accept geospatial operators
        let findQuery = {...query}

        if(req.query.lat && req.query.lng)  {
            findQuery.geo = { 
                $nearSphere: {
                    $geometry: {
                        type : "Point",
                        coordinates : [parseFloat(req.query.lng), parseFloat(req.query.lat)]
                    }
                }
            }
            if(req.query.radius) findQuery.geo.$nearSphere.$maxDistance = parseFloat(req.query.radius)
        } 
  
        let perPage = 20

        Promise.all([
            Service.countDocuments(query),
            CountywideService.find({
                category: req.query.category
            }).select(backOfficeFields),
            Service.find(findQuery)
                .lean()
                // Only return public fields
                .select(backOfficeFields)
                .limit(perPage)
                .skip((req.query.page - 1) * perPage)
        ]).then(([count, countywideServices, services])=>{
            res.json({
                status: "OK",
                count: count,
                pages: Math.floor(count / perPage),
                countywideResults : countywideServices,
                results: services.map((service) =>{
                    if(findQuery.geo){
                        return {
                            ...service,
                            distance: haversine({
                                latitude: req.query.lat,
                                longitude: req.query.lng
                            },{
                                latitude: service.geo.coordinates[1],
                                longitude: service.geo.coordinates[0]
                            },
                            {
                                unit: "mile"
                            })
                        }
                    } else {
                        return service
                    }
                })
            })
        }).catch((e)=>{
            next(e)
        })
    },

    getServiceById: async (req, res, next)=>{
        try{
            let service = await Service.findOne({assetId: req.params.id})
                .lean()
                .select(backOfficeFields)
            if (!service) return next(new Error("NOT_FOUND"))
            res.json({
                status: "OK",
                result: service
            })
        } catch(err){
            return next(err)
        }
    },

    importFromCsv: async (req, res, next) => { 

        try {

            let highestAssetService = await Service.findOne({ }).sort('-assetId').exec();
            if (!highestAssetService) { return next(new Error("NOT_FOUND")) } else {


                let highestAssetId = highestAssetService.assetId;
                let parsed = parseDataUri(req.body.data.attributes.values['CSV file']);
                let newServices = []
                let newAssetId = highestAssetId + 1;

                csv.parse(parsed.data, { delimiter: ',' }, function (err, rows) {
                    if (err) {
                        res.status(400).send({
                        error: `Cannot import data: ${err.message}` });
                    } else {
                        rows.shift(); // shoo headers
                        rows.map(row => {
                            // CSV structure: 'name','url','created_at','phone','latitude','longitude','postcode','email','venue','area','description','keywords','categories','reviewStatus','reviewNotes'
                            let latitude = row[4];
                            let longitude = row[5];
                            let keywords = row[11];
                            newServices.push({
                                assetId: newAssetId,
                                name: row[0],
                                url: row[1],
                                created_at: new Date(row[2]),
                                updated_at: new Date(),
                                phone: row[3],
                                geo: (latitude && longitude)? {
                                    type: "Point",
                                    coordinates: [parseFloat(latitude), parseFloat(longitude)]
                                } : null,
                                postcode: row[6],
                                email: row[7],
                                venue: row[8],
                                area: row[9],
                                description: row[10],
                                reviewStatus: row[13],
                                reviewNotes: row[14],
                                category: row[12].toLowerCase(),
                                keywords: to_array_from_comma(keywords),
                                parentOrganisation: null,
                            })
                            console.log(`✨ Creating ${row[0]}`)
                            newAssetId++;
                        })


                        Service.collection.insertMany(newServices, (err, documents)=>{
                            if(err) return console.log(err) 
                            console.log(`✨  Data successfully imported! ✨`)
                            res.send({ success: '✨ Data successfuly imported! ✨' });
                        })
                    }
                });

             
            }

            
        } catch(err){
            return next(err)
        }

    }
}
