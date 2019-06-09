const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const Service = require('./models/Service')

require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (err)=>{
  if(err) return console.log(err)
  console.log("> DB connection opened 🎉")
})

app
  .prepare()
  .then(() => {
    const server = express()

    
    // Basic list endpoint
    server.get("/services", (req, res)=>{
      Service.find().limit(10)
      .exec((err, services)=>{
        res.json(services)
      })
    })

    // Basic single endpoint
    server.get("/services/:id", (req, res)=>{
      Service.findOne({assetId: req.params.id}, (err, service)=>{
        res.json(service)
      })
    })


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
