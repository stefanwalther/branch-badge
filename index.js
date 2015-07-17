'use strict';
var fs = require('fs');
var express = require('express');
var http = require('http');

var app = express();
var port = (process.env.PORT || 3000);

app.set('port', (process.env.PORT || 5000));
app.use( express.static(__dirname, + '/public'));

app.get('/', function ( req, res ) {
	if (req.header && req.header('Referer') && req.header('Referer' ).indexOf('branch.qlik.com') > -1) {
		var img = fs.readFileSync('./public/branch.gif');
		res.writeHead( 200, {'Content-Type': 'image/gif'});
		res.end( img, 'binary');
	} else {
		var img = fs.readFileSync('./public/single-pix.gif');
		res.writeHead( 200, {'Content-Type': 'image/gif'});
		res.end( img, 'binary');
	}
});

var server = app.listen( port, function (  ) {

	var host = server.address().address;
	var port = server.address().port;

	console.log('App now listening at http://%s:%s', host, port);
});