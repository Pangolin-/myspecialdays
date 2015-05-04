//SERVER SETUP
//node + express

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 80;

//file system

var fs = require('fs');

//start server

server.listen(port, function(){
	console.log('Server listening at port %d', port);
});

//SERVER ROUTING
//define root folder

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

//when http://localhost/

app.get('/', function(req, res){
	res.sendfile('index.html');
});
