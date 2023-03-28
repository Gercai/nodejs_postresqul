const express = require('express');
const app = express();
const router = require("./router");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req,res) => {
    res.send('Your server');
})

app.use("/api", router);

module.exports = app;