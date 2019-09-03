const notify = require("../lib/notify")

module.exports = {

    email: async (req, res) => {
        try{
            await notify.sendEmail(req.body.email, req.body.url)
            res.json({
                status: 200,
                message: "Email sent successfully"
            })
        } catch(e) {
            res.status(404).json({
                status: "NOT_FOUND",
                message: e.error.errors
            })
        }
    },

    text: async (req, res) => {
        try {
            await notify.sendText(req.body.phoneNumber, req.body.url)
            res.json({
                status: 200,
                message: "SMS message sent successfully"
            })
        } catch(e) {
            res.status(404).json({
                status: "NOT_FOUND",
                message: e.error.errors
            })
        }
    }

}