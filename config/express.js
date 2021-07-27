var express = require("express");
var app = express();
var consign = require("consign");

app.use(express.static("./public"));

consign({ cwd: "app" }).include("api").include("routes").into(app);

module.exports = app;