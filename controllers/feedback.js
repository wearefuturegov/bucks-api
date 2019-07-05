const Feedback = require("../models/Feedback")

module.exports = async (req, res, next) => {

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