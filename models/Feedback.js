const mongoose = require("mongoose")

const Feedback = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        maxlength: 500
    },
    email: {
        type: String,
        maxlength: 500
    },
    phone: {
        type: String,
        maxlength: 500
    },
    satisfied: {
        type: String,
        enum: ["yes", "somewhat", "no"],
        required: true,
        maxlength: 10
    },
    category: {
        type: String,
        enum: ["general", "new", "amend"],
        required: true,
        maxlength: 10
    },
    serviceId: Number
})

module.exports = mongoose.model("Feedback", Feedback)