'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })
const listener = app.listen( 3000, function () {
    console.log("Node.js listening on port " + listener.address().port);
  });
  
  