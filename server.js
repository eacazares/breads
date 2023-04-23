const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = express();

//routes
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
});

//listen
app.listen(PORT, () => {
    console.log('listening on point', PORT);
});

