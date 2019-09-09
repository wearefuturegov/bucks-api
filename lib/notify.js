require("dotenv").config()
const NotifyClient = require("notifications-node-client").NotifyClient
const notifyClient = new NotifyClient(process.env.NOTIFY_API_KEY)
const config = require("../_config")

module.exports = {
    sendEmail: async (emailAddress, url) => {
        return await notifyClient
            .sendEmail(config.notifyEmailTemplate, emailAddress, {
                personalisation: {
                    url: url
                },
                reference: ""
            })
    },
    sendText: async (phoneNumber, url) => {
        return await notifyClient
            .sendSms(config.notifySmsTemplate, phoneNumber, {
                personalisation: {
                    url: url
                },
                reference: ""
            })
    }
}
