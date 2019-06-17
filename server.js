const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api')

require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, (err)=>{
  if(err) return console.log(err)
  console.log("> DB connection opened 🎉")
})

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(require('forest-express-mongoose').init({
      modelsDir: __dirname + '/models',
      envSecret: process.env.FOREST_ENV_SECRET,
      authSecret: process.env.FOREST_AUTH_SECRET,
      mongoose: mongoose,
    }))

    server.use(bodyParser.urlencoded({extended: false}))

    // API routes
    server.use("/api", apiRouter)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on port ${port} 🎁`)
    })

  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
