const express = require('express')
const Service = require('../models/Service')

module.exports = {
    list: async (req, res, next)=>{
        let query = {}
        
        if(req.query.category){
            query.category = { $in: req.query.category }
        }

        if(req.query.keywords){
            query.keywords = { $elemMatch: { $in: req.query.keywords } }
        }

        if(req.query.age){
            query.ageGroups = req.query.age
        }

        // TODO: Refactor to use aggregations and a distance field
        // if(req.query.lat && req.query.long){
        //     query.geo = { 
        //         $nearSphere: {
        //             $geometry: {
        //                 type: "Point" ,
        //                 coordinates: [ parseFloat(req.query.lat) , parseFloat(req.query.long) ]
        //             }
        //         }
        //     }
        // }

        let perPage = 10

        try{
            let services = await Service.find(query)
                .lean()
                .limit(perPage)
                .skip((req.query.page - 1) * perPage)
            res.json({
                status: "OK",
                results: services
            })
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