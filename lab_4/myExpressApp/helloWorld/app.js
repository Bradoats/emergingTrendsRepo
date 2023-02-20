var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', function(req, res) {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(8080);

module.exports = app;