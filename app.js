const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use Router
const studentRouter = require('./routes/student');
app.use('/students', studentRouter);


// path not found
app.use('*', (req, res) => {
    res.send('Page Not Found!');
});

const port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});