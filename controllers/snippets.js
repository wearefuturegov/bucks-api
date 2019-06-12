const express = require('express')
const router = express.Router()
const Snippet = require('../models/Snippet')

module.exports = {
    list: (req, res)=>{
        Snippet.find((err, snippets)=>{
            res.json(snippets)
        })
    }
} 