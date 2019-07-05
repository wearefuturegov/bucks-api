const mongoose = require("mongoose")

const Feedback = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },

    email: String,
    phone: String,

    category: {
        type: String,
        enum: ["general", "new", "amend"],
        required: true
    },

    serviceId: Number
})

module.exports = mongoose.model("Feedback", Feedback)