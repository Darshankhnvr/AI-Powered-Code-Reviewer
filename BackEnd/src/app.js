const express = require('express');

const aiRoutes = require('./routes/ai.routes');

const cors = require('cors');

  // Enable CORS for all routes

const app = express()
app.use(cors());


app.use(express.json())

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.use('/ai', aiRoutes)

module.exports = app;