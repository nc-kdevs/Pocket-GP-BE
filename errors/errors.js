"use strict";
exports.__esModule = true;
exports.handle400 = function (err, req, res, next) {
    console.log(err);
    var code = err.code;
    var errorCodes400 = {
        23502: 'Invalid Request'
    };
    if (errorCodes400[code] || err.status === 400) {
        res.status(400).send({ message: errorCodes400[code] || err.msg });
    }
    else
        next(err);
};
exports.handle404 = function (err, req, res, next) {
    var code = err.code;
    var errorCodes404 = {};
    if (errorCodes404[code] || err.status === 404) {
        res.status(404).send({ message: errorCodes404[code] || err.msg });
    }
    else
        next(err);
};
exports.handle405 = function (err, req, res, next) {
    res.status(405).send({ msg: 'Method Not Allowed' });
};
exports.handle422 = function (err, req, res, next) {
    var code = err.code;
    var errorCodes422 = {
        23503: 'Unique Key Violation!. Request cannot be proccessed',
        23505: 'Unique Key Violation!. Request cannot be proccessed'
    };
    if (errorCodes422[code] || err.status === 422) {
        res.status(422).send({ message: errorCodes422[code] || err.msg });
    }
    else
        next(err);
};
exports.handle500 = function (err, req, res, next) {
    var code = err.code;
    var errorCodes500 = {
        42703: 'Property does not Exist - Internal Server Error'
    };
    if (errorCodes500[code]) {
        res.status(500).send({ message: errorCodes500[code] });
    }
};
