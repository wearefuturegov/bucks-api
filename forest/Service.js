// const Liana = require("forest-express-mongoose")

// Liana.collection("Snippet", {
//     fields: [{
//         field: "Tags",
//         type: "String",
//         get: snippet => {
//             return snippet.keywords.join(",").toLowerCase()
//         },
//         set: (snippet, keywords_string) => {
//             // Turn everything lowercase, remove spaces, and break into array
//             let keywords_array = keywords_string.toLowerCase().replace(/\s+/g, "").split(",")
//             // Filter out any falsy elements
//             snippet.keywords = keywords_array.filter(el => el != null)
//             return snippet
//         }
//     }]
// })

// Liana.collection("Service", {
//     fields: [{
//         field: "Keywords",
//         type: "String",
//         get: (service) => {
//             return service.keywords.join(",").toLowerCase()
//         },
//         set: (service, keywords_string) => {
//             let keywords_array = keywords_string.toLowerCase().replace(/\s+/g, '').split(",")
//             service.keywords = keywords_array
//             return service
//         }
//     }]
// })