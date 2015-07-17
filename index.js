'use strict';
var express = require('express');
var http = require('http');

var app = express();
var port = (process.env.PORT || 3000);

app.set('port', (process.env.PORT || 5000));
app.use( express.static(__dirname, + '/public'));

app.get('/branch', function ( req, res ) {
	console.log('req', req);
});

var server = app.listen( port, function (  ) {

	var host = server.address().address;
	var port = server.address().port;

	console.log('App now listening at http://%s:%s', host, port);
});