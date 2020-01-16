const mongoose = require("mongoose")
const Service = require("../models/Service")

require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, async err => {
    
    if(err) return console.error(err)
    console.log("> DB connection opened 🎉")

    Service.find((err, services) => {
        services.forEach(async (service, i) => {
            await Service.updateOne({ assetId: service.assetId }, { 
                updatedAt: service.lastUpdated
            })
            console.log(`Updated ${service.assetId}...`)
        })
        console.log("DONE")
    })
})