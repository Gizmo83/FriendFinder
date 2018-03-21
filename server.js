var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var routes = require("./app/routing/htmlRoutes")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });