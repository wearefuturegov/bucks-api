/* eslint-disable no-unused-vars */
const router = require("express").Router()
const rateLimit = require("express-rate-limit")
const services = require("../controllers/services")
const snippets = require("../controllers/snippets")
const geocode = require("../controllers/geocode")
const notify = require("../controllers/notify")

// If IPs make more than 500 requests in a minute, block for an hour
router.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    message: {
        status: "TOO_MANY_REQUESTS",
        message: "You made too many requests. Try again later."
    }
}))

router.post("/geocode", geocode)

router.post("/share/email", notify.email)
router.post("/share/text", notify.text)

router.get("/services", services.list)
router.get("/services/:id", services.getServiceById)
router.get("/snippets", snippets.list)

// Error handler
router.use((err, req, res, next)=>{
    // eslint-disable-next-line no-console
    console.error(err)
    if(err.message === "NOT_FOUND"){
        res.status(404).json({
            status: "NOT_FOUND",
            message: "No result matched your query"
        })
    } else if (err.codeName === "BadValue" || err.name === "CastError") {
        res.status(500).json({
            status: "QUERY_ERROR",
            message: "Your query wasn't correctly formed"
        })
    } else {
        res.status(500).json({
            status: "UNKNOWN_ERROR",
            message: "Your request could not be fulfilled, try again later"
        })
    }
})

// Handle unknown api routes
router.use("*", (req, res, next)=>{
    res.status(404).json({
        status: "NO_ROUTE",
        message: "No route matches your request"
    })
})

module.exports = router