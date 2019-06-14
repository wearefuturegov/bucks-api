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

        let perPage = 10

        Service.find(query, "name")
            .skip((req.query.page - 1) * perPage)
            .limit(perPage)
            .exec((err, services)=>{
                res.json(services)
            })
    },

    getServiceById: (req, res)=>{
        Service.findOne({assetId: req.params.id}, (err, service)=>{
          res.json(service)
        })
    }
} 