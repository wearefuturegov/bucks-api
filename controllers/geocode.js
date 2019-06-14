const express = require('express')
const fetch = require('isomorphic-unfetch')

module.exports = async (req, res) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.location}&key=${process.env.GOOGLE_API_KEY}`)
    const data = await response.json()
    res.json(data)
}