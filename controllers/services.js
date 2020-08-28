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
                            // CSV structure follows order of vars below;
                   

                            let name = row[0];
                            let parentOrganisation = row[1];
                            let description = row[2];
                            let price = row[3];
                            let category = row[4].toLowerCase();
                            let keywords = to_array_from_comma(row[5]);
                            let ageGroups = to_array_from_comma(row[6]);
                            let accessibility = to_array_from_comma(row[7]);
                            let suitability = to_array_from_comma(row[8]);
                            let venue = row[9];
                            let area = row[10];
                            let postcode = row[11];
                            let latitude = row[12];
                            let longitude = row[13];
                            let frequency = row[14];
                            let days = to_array_from_comma(row[15]);
                            let contactName = row[16];
                            let email = row[17].trim().toLowerCase();
                            let phone = row[18].trim();
                            let url = row[19];
                            let reviewDate = new Date(row[20]);
                            let reviewStatus = row[21];
                            let reviewNotes = row[22];
                            let cloNotes = row[23];
                            let reviewNumber = row[24];
                            let assignedTo = row[25];
                            let cloCheckMeetings = row[26];
                            let volDbsCheck = row[27];
                            let safeguarding = row[28];
                            let healthSafety = row[29];
                            let insurance = row[30];
                            let confidDataProtect = row[31];
                            let equalityDiversity = row[32];
                            let comment1 = row[33];
                            let comment2 = row[34];
                            let comment3 = row[35];
                            let genericField1 = row[36];
                            let genericField2 = row[37];
                            let genericField3 = row[38];
                            let genericField4 = row[39];
                            let genericField5 = row[40];



                            newServices.push({
                                assetId: newAssetId,

                                name: name,
                                parentOrganisation: parentOrganisation,
                                description: description,
                                price: price,

                                category: category,


                                keywords: keywords,
                                ageGroups: ageGroups,
                                accessibility: accessibility,
                                suitability: suitability,

                                venue: venue,
                                area: area,
                                postcode: postcode,

                                geo: (latitude && longitude)? {
                                    type: "Point",
                                    coordinates: [parseFloat(latitude), parseFloat(longitude)]
                                } : null,

                                frequency: frequency,
                                days: days,

                                contactName: contactName,
                                email: email,
                                phone: phone,
                                url: url,

                                lastUpdated: new Date(),

                                // PRIVATE/BACK OFFICE FIELDS

                                reviewDate: reviewDate,

                                reviewStatus: reviewStatus,
                                reviewNotes: reviewNotes,
                                cloNotes: cloNotes,
                                reviewNumber: reviewNumber,
                                assignedTo: assignedTo,


                                cloCheckMeetings: cloCheckMeetings,

                                volDbsCheck: volDbsCheck,
                                safeguarding: safeguarding,
                                healthSafety: healthSafety,
                                insurance: insurance,

                                confidDataProtect: confidDataProtect,
                                equalityDiversity: equalityDiversity,

                                comment1: comment1,
                                comment2: comment2,
                                comment3: comment3,

                                genericField1: genericField1,
                                genericField2: genericField2,
                                genericField3: genericField3,
                                genericField4: genericField4,
                                genericField5: genericField5,
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
