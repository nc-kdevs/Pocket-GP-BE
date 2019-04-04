"use strict";
exports.__esModule = true;
exports.handle400 = function (err, req, res, next) {
    var _a;
    console.log(err);
    var code = err.code;
    var errorCodes400 = (_a = {},
        _a[code] = 'Invalid Request',
        _a);
    if (Object.keys(errorCodes400).includes('23502' || '42601' || '22P02')) {
        res.status(400).send({ message: errorCodes400[code] });
    }
    else
        next(err);
};
exports.handle404 = function (err, req, res, next) {
    var _a;
    var code = err.code;
    var errorCodes404 = (_a = {},
        _a[code] = 'Not Found',
        _a);
    if (Object.keys(errorCodes404).includes('22001' || 'ENOENT' || '42703')) {
        res.status(404).send({ message: errorCodes404[code] });
    }
    else
        next(err);
};
exports.handle422 = function (err, req, res, next) {
    var _a;
    var code = err.code;
    var errorCodes422 = (_a = {},
        _a[code] = 'Unique Key Violation!. Request cannot be proccessed',
        _a);
    if (Object.keys(errorCodes422).includes('23503' || '23503')) {
        res.status(422).send({ message: errorCodes422[code] });
    }
    else
        next(err);
};
exports.handle500 = function (err, req, res, next) {
    res.status(422).send({ message: 'Property does not Exist - Internal Server Error' });
};
exports.handle405 = function (err, req, res, next) {
    res.status(405).send({ msg: 'Method Not Allowed' });
};
