const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = express();

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
});

//bread routes
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


//listen
app.listen(PORT, () => {
    console.log('listening on point', PORT);
});


