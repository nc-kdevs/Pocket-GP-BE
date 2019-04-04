"use strict";
exports.__esModule = true;
var patients_1 = require("../models/patients");
exports.fetchUserAilments = function (req, res, next) {
    var username = req.params.username;
    patients_1.getUserAilments(username)
        .then(function (ailments) {
        return res.status(200).send({ ailments: ailments });
    })["catch"](next);
};
