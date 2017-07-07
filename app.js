const express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use Router
const studentRouter = require('./studentRouter');
app.use('/students', studentRouter);

const port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log(`http://localhost:${port}`);
});