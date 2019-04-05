"use strict";
exports.__esModule = true;
var gps_js_1 = require("../models/gps.js");
var encryption_js_1 = require("../security/encryption.js");
exports.getGps = function (req, res, next) {
    var surgery = req.query.surgery;
    var conditions = {};
    if (surgery)
        conditions['gps.surgery_id'] = surgery;
    gps_js_1.fetchGps(conditions)
        .then(function (gps) {
        var decryptedGps = gps.map(function (gp) { return encryption_js_1.decrypt(gp); });
        res.status(200).send({ gps: decryptedGps });
    })["catch"](next);
};
exports.postGp = function (req, res, next) {
    var gp = req.body;
    var encryptedGp = encryption_js_1.encrypt(req.body);
    gps_js_1.addGp(encryptedGp)
        .then(function (_a) {
        var newGp = _a[0];
        var decryptedGp = encryption_js_1.decrypt(newGp);
        res.status(201).send({ gp: decryptedGp });
    })["catch"](next);
};
exports.getGpByID = function (req, res, next) {
    var gp_id = req.params.gp_id;
    gps_js_1.fetchGpById(gp_id)
        .then(function (_a) {
        var gp = _a[0];
        var decryptedGp = encryption_js_1.decrypt(gp);
        if (!gp)
            return Promise.reject({ code: '22001' });
        return res.status(200).send({ gp: decryptedGp });
    })["catch"](next);
};
exports.deleteGpByID = function (req, res, next) {
    var gp_id = req.params.gp_id;
    gps_js_1.removeGp(gp_id)
        .then(function (deletedGp) {
        if (deletedGp === 1)
            res.sendStatus(204);
        else
            res.status(404).send({ status: 404, msg: 'Not found' });
    })["catch"](next);
};
