const express = require('express')
const app = express()
const router = require("./router")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", router)
  
module.exports = app;