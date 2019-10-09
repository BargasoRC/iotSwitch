  
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static('scripts'));

http.listen(port, '0.0.0.0', function () {
    console.log('listening on *:' + port);
});