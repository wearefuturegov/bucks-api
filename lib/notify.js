require("dotenv").config()
const NotifyClient = require("notifications-node-client").NotifyClient
const notifyClient = new NotifyClient(process.env.NOTIFY_API_KEY)

// sendText("07507069931", "https://bucks-care-staging.herokuapp.com/")
// sendEmail("jaye@wearefuturegov.com", "https://bucks-care-staging.herokuapp.com/")

module.exports = {
    sendEmail: async (emailAddress, url) => {
        try{
            let res = notifyClient
                .sendEmail("1dbf18a5-4080-4ce4-a210-8e67dd75d47a", emailAddress, {
                    personalisation: {
                        url: url
                    },
                    reference: ""
                })
            console.log(res)
        } catch(e) {
            console.error(e)
        }
    },
    sendText: async (phoneNumber, url) => {
        try {
            let res = await notifyClient.sendSms("d8a965d4-efc1-451c-a9b1-2101ab67efbd", phoneNumber, {
                personalisation: {
                    url: url
                },
                reference: ""
            })
            console.log(res)
        } catch(e) {
            console.error(e)
        }
    }
}
