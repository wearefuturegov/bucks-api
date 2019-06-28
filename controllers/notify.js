const notify = require("../lib/notify")

module.exports = {
    email: async (req, res) => {
        await notify.sendEmail(req.body.email, req.body.url)
        return res.send("done")
    },
    text: async (req, res) => {
        await notify.sendText(req.body.phoneNumber, req.body.url)
    }
}