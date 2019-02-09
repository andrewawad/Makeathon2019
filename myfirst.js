var express = require("express");
var myParser = require("body-parser");
var app = express();
 
app.use(myParser.urlencoded({extended : true}));
app.post("/new", function(request, response) {
console.log(request.body); //This prints the JSON document received (if it is a JSON document)
 });

var http = require('http');
port = process.env.PORT || 80
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(port);
