var express = require("express");
var myParser = require("body-parser");
var app = express.Router();
var p = require(./mysecond)
var http = require('http');
port = process.env.PORT || 80 
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write('Hello World!');  
});
}).listen(port);
