var express = require("express");
var server = express();
var api = require("./routes/api");
server.use("/_api/", api);