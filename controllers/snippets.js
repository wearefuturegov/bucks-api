const express = require('express')
const Snippet = require('../models/Snippet')

module.exports = {
    list: (req, res)=>{
        Snippet.find((err, snippets)=>{
            if (err) return next(err);
            if (snippets === null) return next(new Error("ZERO_RESULTS"))
            res.json(snippets)
        })
    }
} 