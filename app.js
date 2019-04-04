"use strict";
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var apiRouter_js_1 = require("./routes/apiRouter.js");
var errors_1 = require("./errors/errors");
var app = express();
// for cors access - building front-end
app.use(cors());
// for POST requests!
app.use(bodyParser.json());
app.use('/api', apiRouter_js_1["default"]);
app.all('/*', function (req, res) {
    res.status(404).send({ status: 404, msg: 'Sorry, not found...' });
});
app.use(errors_1.handle400);
app.use(errors_1.handle404);
app.use(errors_1.handle422);
app.use(errors_1.handle500);
module.exports = app;
