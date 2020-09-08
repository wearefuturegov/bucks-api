/* eslint-disable no-console */
const csv = require("csvtojson")
const mongoose = require("mongoose")
const Service = require("../models/Service")

require("dotenv").config()

// Turn semicolon-delimited strings into arrays, make every element lowercase and remove empty string elements
const to_array = string => {
    return string.toLowerCase()
        .replace("wc wheelchair access", "wheelchair-accessible bathroom")
        .split(";")
        .filter(Boolean)
}

// Turn semicolon-delimited strings into arrays, make every element lowercase and remove empty string elements
const to_array_from_comma = string => {
    return removeLastComma(string).toLowerCase()
        .replace("wc wheelchair access", "wheelchair-accessible bathroom")
        .split(", ")
        .filter(Boolean)
}

function removeLastComma(strng){        
    var n=strng.lastIndexOf(",");
    var a=strng.substring(0,n) 
    return a;
}


// Turn Access dates into a mongo-parsable string
const to_parsable_date = (string) => {
    if(string){
        let parts = string.split("/")
        // Remember, only months are zero-indexed for some reason
        return new Date(parts[2], parts[1]-1, parts[0])
    } else {
        return null
    }
}

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true}, (err)=>{
    if(err) return console.log(err)

    // Look for a CSV in the lib folder
    const csvPath="./lib/data.csv"

    // First, delete everything
    Service.deleteMany({}, (err)=>{
        if(err) console.log(err)
    })

    csv()
        .fromFile(csvPath)
        .then((rows)=>{

            let newServices = []

            rows.map((row)=>{
                newServices.push({
                    assetId: parseInt(row.id), 

                    name: row.name || null,
                    parentOrganisation: row.parent_organisation || null,
                    description: row.description || null,
                    price: row.price || null,

                    category: row.category.toLowerCase() || null,

                    keywords: to_array_from_comma(row.keywords),
                    accessibility: to_array_from_comma(row.accessibility),

                    ageGroups: to_array(row.age_groups),
                    suitability: to_array(row.suitability),
                
                    venue: row.venue || null,
                    area: row.area || null,
                    postcode: row.postcode || null,

                    geo: (row.latitude && row.longitude)? {
                        type: "Point",
                        coordinates: [parseFloat(row.longitude), parseFloat(row.latitude)]
                    } : null,
                
                    // daytime: row.daytime === "TRUE",

                    frequency: row.frequency || null,
                    days: to_array(row.days, true),

                    contactName: row.contact_name || null,
                    email: row.email || null,
                    phone: row.phone || null,
                    url: row.url || null,

                    lastUpdated: to_parsable_date(row.last_updated),
                    reviewDate: to_parsable_date(row.review_date),

                    reviewStatus: row.review_status || null,
                    reviewNotes: row.review_notes || null,
                    cloNotes: row.clo_notes || null,
                    reviewNumber: row.review_number,
                    assignedTo: row.assigned_to || null,
                
                    // lafArea: row.laf_area || null,
                    // ccgLocality: row.ccg_locality || null,

                    cloCheckMeetings: row.clo_check_meetings == "TRUE",
                
                    volDbsCheck: row.vol_dbs_check || null,
                    safeguarding: row.safeguarding || null,
                    healthSafety: row.health_safety || null,
                    insurance: row.insurance || null,

                    confidDataProtect: row.confid_data_protect == "TRUE",
                    equalityDiversity: row.equality_diversity == "TRUE",

                    legacyCategories: to_array(row.legacy_categories)
                })
                console.log(`Creating ${row.name}`)
            })

            Service.collection.insertMany(newServices, (err, documents)=>{
                if(err) return console.log(err) 

                console.log(`✨  Seed complete: services saved to DB ✨`)
                process.exit()
            })

        })
})