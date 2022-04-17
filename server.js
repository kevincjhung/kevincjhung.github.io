const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const PORT = process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

const restaurant = require('./routes/restaurant');
const review = require('./routes/review')

app.get('/', (req, res) => {
    res.redirect('/restaurant')
})





app.use('/review', review);
app.use('/restaurant', restaurant);
app.listen(PORT, (err, result) => {
    console.log(`App is running on PORT ${PORT}`);
})