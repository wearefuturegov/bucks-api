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

        query.geo = { 
            $near: {
                $geometry: {
                    type: "Point" ,
                    coordinates: [ 0 , 0 ]
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

    getServiceById: (req, res)=>{
        Service.findOne({assetId: req.params.id}, (err, service)=>{
          res.json(service)
        })
    }
} 