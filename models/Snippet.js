const mongoose = require('mongoose')

const Snippet = new mongoose.Schema({
    title: String,
    description: String,
    href: String,
})

module.exports = mongoose.model('Snippet', Snippet)