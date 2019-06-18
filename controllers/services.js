const express = require('express')
const Service = require('../models/Service')

module.exports = {
    list: async (req, res, next)=>{
        let query = {}
        
        if(req.query.category){
            query.category = { $in: [].concat(req.query.category) }
        }

        if(req.query.keywords){
            query.keywords = { $elemMatch: { $in: [].concat(req.query.keywords) } }
        }

        if(req.query.age){
            query.ageGroups = req.query.age
        }

        let perPage = 10

        try{
            if(req.query.lat && req.query.lng){
                // Aggregation

                let services = await Service.aggregate([
                    {
                        $geoNear: {
                            spherical: true,
                            // limit: perPage,
                            query: query,
                            distanceField: "distance",
                            explain: true,
                            near: {
                                type: "Point" ,
                                // REMEMBER: reverse lng and lat from usual order here
                                coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
                            }
                        }
                    },
                    { $sort: {distance: 1}},
                    { $skip: (req.query.perPage > 1)? ((req.query.page - 1) * perPage) : 0},
                    { $limit: perPage },
                ])
                res.json({
                    status: "OK",
                    results: services
                })
    
            } else {
                // Normal find query
                let services = await Service.find(query)
                    .lean()
                    .limit(perPage)
                    .skip((req.query.page - 1) * perPage)
                res.json({
                    status: "OK",
                    results: services
                })
            }

        } catch(err){
            return next(err)
        }
    },

    getServiceById: async (req, res, next)=>{
        try{
            let service = await Service.findOne({assetId: req.params.id})
                .lean()
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