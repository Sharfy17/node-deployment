var express = require("express");

var app = express();

var path = require('path');


app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views', path.join(__dirname, './client/views'));

// app.set ('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})
