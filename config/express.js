var express = require("express");
var app = express();

app.use(express.static("./public"));

require("../app/routes/foto")(app);
require("../app/routes/grupo")(app);

module.exports = app;