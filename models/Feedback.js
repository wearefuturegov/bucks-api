const mongoose = require("mongoose")

const Feedback = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },

    email: String,
    phone: String,

    satisfied: {
        type: String,
        enum: ["yes", "somewhat", "no"],
        required: true
    },

    category: {
        type: String,
        enum: ["general", "new", "amend"],
        required: true
    },

    serviceId: Number
})

module.exports = mongoose.model("Feedback", Feedback)