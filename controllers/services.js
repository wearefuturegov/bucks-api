const Service = require("../models/Service")
const haversine = require("haversine")

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
    legacyCategories: 0
}

module.exports = {
    list: async (req, res, next)=>{
        let query = {}
        
        if(req.query.category) query.category = { $in: [].concat(req.query.category) }
        if(req.query.keywords) query.keywords = { $elemMatch: { $in: [].concat(req.query.keywords) } }
        if(req.query.days) query.days = { $in: [].concat(req.query.days) }
        if(req.query.age) query.ageGroups = req.query.age

        let findQuery = {...query}
        if(req.query.lat && req.query.lng) findQuery.geo = {$nearSphere: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}

        let perPage = 10

        Promise.all([
            Service.countDocuments(query),
            Service.find(findQuery)
                .lean()
                .select(backOfficeFields)
                .limit(perPage)
                .skip((req.query.page - 1) * perPage)
        ]).then(([count, services])=>{
            res.json({
                status: "OK",
                count: count,
                results: services.map((service, i) =>{
                    if(req.query.lat && req.query.lng){
                        return {
                            ...service,
                            // Add an extra field for computed distance
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
    }
} 