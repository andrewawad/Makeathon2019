var express = require('express')
var app = express.Router()

// respond with "hello world" when a GET request is made to the homepage
app.post('/blaise', function (req, res) {
  res.send('hello world')
})
