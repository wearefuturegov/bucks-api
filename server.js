const express = require("express")
const next = require("next")
const mongoose = require("mongoose")
const apiRouter = require("./routes/api")
const sslRedirect = require("heroku-ssl-redirect")
const basicAuth = require("express-basic-auth")
const Sentry = require("@sentry/node")

require("dotenv").config()

Sentry.init({ dsn: process.env.SENTRY_DSN })

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, (err)=>{
    // eslint-disable-next-line no-console
    if(err) return console.error(err)
    // eslint-disable-next-line no-console
    console.log("> DB connection opened 🎉")
})

app
    .prepare()
    .then(() => {
        const server = express()

        server.use(Sentry.Handlers.requestHandler())

        server.set("trust proxy", 1)

        server.use(require("forest-express-mongoose").init({
            modelsDir: __dirname + "/models",
            envSecret: process.env.FOREST_ENV_SECRET,
            authSecret: process.env.FOREST_AUTH_SECRET,
            mongoose: mongoose,
        }))

        if(process.env.USER && process.env.PASSWORD) {
            app.use(basicAuth({
                users: { [process.env.USER]: [process.env.PASSWORD] }
            }))
        }

        server.use(sslRedirect())
        server.use(express.json())

        // API routes
        server.use("/api", apiRouter)

        // Service detail route
        server.get("/service/:id", function(req, res){
            const actualPage = "/detail"
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get("*", function(req, res){
            return handle(req, res)
        })

        server.use(Sentry.Handlers.errorHandler())

        server.listen(port, err => {
            if (err) throw err
            // eslint-disable-next-line no-console
            console.log(`> Ready on port ${port} 🎁`)
        })

    })
    .catch(ex => {
        // eslint-disable-next-line no-console
        console.error(ex.stack)
        process.exit(1)
    })
