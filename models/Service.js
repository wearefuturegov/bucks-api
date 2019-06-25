const mongoose = require("mongoose")

const Service = new mongoose.Schema({

    assetId: {
        type: Number,
        required: [true, "All services need a unique asset ID"]
    },

    name: String,
    parentOrganisation: String,
    description: String,
    price: String,

    category: String,

    keywords: [String],
    ageGroups: [String],
    accessibility: [String],
    suitability: [String],

    venue: String,
    area: String,
    postcode: String,
    latitude: Number,
    longitude: Number,

    geo: Object,

    daytime: Boolean,
    frequency: String,
    days: [String],

    contactName: String,
    email: String,
    phone: String,
    url: String,

    lastUpdated: Date,

    // PRIVATE/BACK OFFICE FIELDS

    reviewDate: Date,

    reviewStatus: String,
    reviewNotes: String,
    cloNotes: String,
    reviewNumber: Number,
    assignedTo: String,

    lafArea: String,
    ccgLocality: String,

    volDbsCheck: String,
    safeguarding: String,
    healthSafety: String,
    insurance: String,

    legacyCategories: [String]

})

module.exports = mongoose.model("Service", Service)