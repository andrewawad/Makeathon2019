var express = require("express");
var myParser = require("body-parser");
var app = express.Router();
 
//app.use(myParser.urlencoded({extended : true}));
//app.post("/sam", function(request, response) {
//res.write(request.body); //This prints the JSON document received (if it is a JSON document)
// });
var http = require('http');
port = process.env.PORT || 80 ||8080
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write('Hello World!');  
app.use(myParser.urlencoded({extended : true}));
app.post("/sam", function(request, response) {
res.write(request.body); //This prints the JSON document received (if it is a JSON document:e)
});
res.end()
}).listen(port);
