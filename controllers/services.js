const express = require('express')
const router = express.Router()
const Service = require('../models/Service')

module.exports = {
    list: (req, res)=>{
        Service.find().limit(10)
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