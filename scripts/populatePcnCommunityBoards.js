const csv = require("csvtojson")
const mongoose = require("mongoose")
const Service = require("../models/Service")

require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, async err => {
    
    if(err) return console.error(err)
    console.log("> DB connection opened 🎉")

    const postcodeData = await csv().fromFile("./scripts/postcodes.csv")

    Service.find((err, services) => {
        services.forEach(async (service, i) => {

            if(postcodeData.filter(p => p.postcode === service.postcode )){

                const match = postcodeData.filter(p => p.postcode === service.postcode )[0]

                const res = await Service.updateOne({ assetId: service.assetId }, { 
                    comment1: match.pcn,
                    comment2: match.community_board
                })
                console.log(`Updating ${service.assetId}...`)
            }
        })
        console.log("DONE")
    })

})

