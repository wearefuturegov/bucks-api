const mongoose = require("mongoose")

const Feedback = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    // Contact details
    email: String,
    phone: String,
    // General/new/amend
    category: {
        type: String,
        required: true
    },
    // Associated service
    serviceId: Number
})

module.exports = mongoose.model("Feedback", Feedback)