const express = require('express')
const Snippet = require('../models/Snippet')

module.exports = {
    list: async (req, res, next)=>{

        let query = {}
        
        if(req.query.keywords){
            query.keywords = { $elemMatch: { $in: req.query.keywords } }
        }

        try{
            const snippets = await Snippet.find(query).lean()
            res.json({
                status: "OK",
                results: snippets
            })
        } catch(err){
            return next(err)
        }
    }
} 