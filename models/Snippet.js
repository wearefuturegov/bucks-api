const mongoose = require("mongoose")

const strToLower = v => {
    return v.toLowerCase()
}

const arrayToLower = v =>{
    return v.map(el =>{
        return el.toLowerCase()
    })
}

const Snippet = new mongoose.Schema({
    title: String,
    description: String,
    href: {type: String, set: strToLower},
    keywords: {type: [String], set: arrayToLower},
    imageUrl: {type: String}
})

module.exports = mongoose.model("Snippet", Snippet)