const express = require('express')
const Snippet = require('../models/Snippet')

module.exports = {
    list: async (req, res, next)=>{
        try{
            const snippets = await Snippet.find().lean()
            if (snippets.length === 0) return next(new Error("ZERO_RESULTS"))
            res.json(snippets)
        } catch(err){
            return next(err)
        }
    }
} 