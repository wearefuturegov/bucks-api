const Feedback = require("../models/Feedback")

module.exports = async (req, res, next) => {

    console.log("BODY:", req.body)

    try{
        // TODO
        // Create feedback object here

        let newFeedback = Feedback(req.body)
        newFeedback.save()
        res.json(newFeedback)

    } catch(e){
        next(e)
    }
}