var express = require('express');
var app = express();
var url = require('url');
var xml = require('xml');

var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

app.get('/', function(req, res) {

    var query = url.parse(req.url, true).query;
    console.log(query);
    res.setHeader('Content-Type', 'application/xml');

    res.send(xml({
        response: [{
            'playtext': 'Hello world!'
        }]
    }));

});

app.get('*', function(req, res) {

    var query = url.parse(req.url, true).query;
    console.log(query);

    res.status(404).end();
});

var server = app.listen(port, function() {
    console.log('Listening on ' + port);
});
