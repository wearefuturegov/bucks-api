const express = require('express')
const Service = require('../models/Service')

module.exports = {
    list: (req, res)=>{
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

        if(req.query.lat && req.query.long){
            console.log(req.query)
            query.geo = { 
                $nearSphere: {
                    $geometry: {
                        type: "Point" ,
                        coordinates: [ parseFloat(req.query.lat) , parseFloat(req.query.long) ]
                    }
                }
            }
        }

        let perPage = 10

        Service.find(query)
            .skip((req.query.page - 1) * perPage)
            .limit(perPage)
            .exec((err, services)=>{
                if(err) console.log(err)
                res.json(services)
            })
    },

    getServiceById: async (req, res)=>{
        let service = await Service.findOne({
            assetId: req.params.id
          }, (err, service)=>{
              if(err) console.log(err)
              res.json(service)
          })
    }
} 