const router = require('express').Router()

const services = require('../controllers/services')
const snippets = require('../controllers/snippets')
const geocode = require('../controllers/geocode')

router.post("/geocode", geocode)
router.get("/services", services.list)
router.get("/services/:id", services.getServiceById)
router.get("/snippets", snippets.list)

// Error handler
router.use((err, req, res, next)=>{
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
            err: err,
            status: "UNKNOWN_ERROR",
            message: "Your request could not be fulfilled, try again later"
        })
    }
})

// Handle unknown api routes
router.use('*', (req, res)=>{
    res.status(404).json({
        status: "NO_ROUTE",
        message: "No route matches your request"
    })
})

module.exports = router