//Dependencies
const express = require('express')
const methodOverride = require('method-override')

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = express();

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))


//routes
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
});

//bread routes
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.get('*', (req, res)=> {
    res.send('404')
})


//listen
app.listen(PORT, () => {
    console.log('listening on point', PORT);
});


