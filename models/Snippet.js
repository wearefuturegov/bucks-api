const mongoose = require('mongoose')

const Snippet = new mongoose.Schema({
    title: String,
    description: String,
    href: String,
    keywords: Array
})

module.exports = mongoose.model('Snippet', Snippet)