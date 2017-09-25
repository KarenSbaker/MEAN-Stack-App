var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
    console.log('Could not connect to database: ', err);
    }
    else {
        console.log('Connected to databse: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index/html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});