const express = require('express')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
});

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
  

app.listen (PORT, () => {
    console.log('nomming at port', PORT);
});