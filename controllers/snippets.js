const express = require('express')
const Snippet = require('../models/Snippet')

module.exports = {
    list: async (req, res, next)=>{
        try{
            const snippets = await Snippet.find().lean()
            res.json({
                status: "OK",
                results: snippets
            })
        } catch(err){
            return next(err)
        }
    }
} 