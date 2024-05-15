const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const db_URL = 'mongodb+srv://netninja:ahmed224@cluster0.yne7fet.mongodb.net/Nooter'
mongoose.connect(db_URL).then(result => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
})

app.use(noteRoutes);

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})