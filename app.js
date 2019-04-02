"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var apiRouter = require("./routes/apiRouter.js");
var app = express();
// for cors access - building front-end
app.use(cors());
// for POST requests!
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.all('/*', function (req, res) {
    res.status(404).send({ status: 404, msg: 'Sorry, not found...' });
});
module.exports = app;
