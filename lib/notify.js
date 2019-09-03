require("dotenv").config()
const NotifyClient = require("notifications-node-client").NotifyClient
const notifyClient = new NotifyClient(process.env.NOTIFY_API_KEY)

module.exports = {
    sendEmail: async (emailAddress, url) => {
        return await notifyClient
            .sendEmail("1dbf18a5-4080-4ce4-a210-8e67dd75d47a", emailAddress, {
                personalisation: {
                    url: url
                },
                reference: ""
            })
    },
    sendText: async (phoneNumber, url) => {
        return await notifyClient
            .sendSms("d8a965d4-efc1-451c-a9b1-2101ab67efbd", phoneNumber, {
                personalisation: {
                    url: url
                },
                reference: ""
            })
    }
}
