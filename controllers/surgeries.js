"use strict";
exports.__esModule = true;
var surgeries_js_1 = require("../models/surgeries.js");
var encryption_js_1 = require("../security/encryption.js");
exports.getSurgeries = function (req, res, next) {
    surgeries_js_1.fetchSurgeries()
        .then(function (surgeries) {
        var decryptedSurgeries = surgeries.map(function (surgery) { return encryption_js_1.decrypt(surgery); });
        res.status(200).send({ surgeries: decryptedSurgeries });
    })["catch"](next);
};
exports.postSurgery = function (req, res, next) {
    var newSurgery = req.body;
    var encryptedSurgery = encryption_js_1.encrypt(req.body);
    surgeries_js_1.addSurgery(encryptedSurgery)
        .then(function (_a) {
        var surgery = _a[0];
        var decryptedSurgery = encryption_js_1.decrypt(surgery);
        return res.status(201).send({ surgery: decryptedSurgery });
    })["catch"](next);
};
exports.getSurgeryByID = function (req, res, next) {
    var surgery_id = req.params.surgery_id;
    surgeries_js_1.fetchSurgeryByID(surgery_id)
        .then(function (_a) {
        var surgery = _a[0];
        var decryptedSurgery = encryption_js_1.decrypt(surgery);
        res.status(200).send({ surgery: decryptedSurgery });
    })["catch"](next);
};
exports.patchSurgeryByID = function (req, res, next) {
    var surgery_id = req.params.surgery_id;
    var _a = req.body, surgery_name = _a.surgery_name, surgery_address = _a.surgery_address;
    var encryptedSurgery = encryption_js_1.encrypt(req.body);
    surgeries_js_1.updateSurgery(surgery_id, encryptedSurgery)
        .then(function (_a) {
        var surgery = _a[0];
        var decryptedSurgery = encryption_js_1.decrypt(surgery);
        res.status(200).send({ surgery: decryptedSurgery });
    })["catch"](next);
};
exports.deleteSurgeryByID = function (req, res, next) {
    var surgery_id = req.params.surgery_id;
    surgeries_js_1.deleteSurgery(surgery_id)
        .then(function () {
        res.sendStatus(204);
    })["catch"](next);
};
