const fetch = require("isomorphic-unfetch")

module.exports = async (req, res, next) => {
    try{
        let location = req.query.location
        // Edge case handlers
        if (location.toLowerCase().trim() === "stoke") location = "Stoke Mandeville"
        if (location.toLowerCase().trim() === "wycombe") location = "High Wycombe"
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}, Buckinghamshire&region=uk&key=${process.env.GOOGLE_API_KEY}`)
        const data = await response.json()
        res.json(data)
    } catch(e){
        next(e)
    }
}