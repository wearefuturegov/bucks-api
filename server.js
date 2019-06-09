const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (err)=>{
  if(err) return console.log(err)
  console.log("> DB connection opened")
})






const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
