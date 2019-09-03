const Feedback = require("../models/Feedback")

module.exports = async (req, res, next) => {
    try{
        let newFeedback = Feedback(req.body)
        newFeedback.submitted = new Date()
        newFeedback.save()
        res.json(newFeedback)

    } catch(e){
        next(e)
    }
}