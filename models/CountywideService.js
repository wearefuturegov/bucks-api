const mongoose = require("mongoose")

const strToLower = v => {
    return v.toLowerCase()
}

const arrayToLower = v =>{
    return v.map(el =>{
        return el.toLowerCase()
    })
}

const CountywideService = new mongoose.Schema({
    name: String,
    description: String,
    href: {type: String, set: strToLower},
    category: {type: String, set: strToLower}
})

module.exports = mongoose.model("CountywideService", CountywideService)