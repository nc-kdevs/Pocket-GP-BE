"use strict";
exports.__esModule = true;
var ailments_1 = require("../models/ailments");
var encryption_js_1 = require("../security/encryption.js");
exports.getAilmentData = function (req, res, next) {
    var ailment_id = req.params.ailment_id;
    ailments_1.fetchAilment(ailment_id)
        .then(function (_a) {
        var ailment = _a[0];
        var decryptedAilment = encryption_js_1.decrypt(ailment);
        res.status(200).send({ ailment: decryptedAilment });
    })["catch"](next);
};
exports.patchAilmentData = function (req, res, next) {
    var ailment_id = req.params.ailment_id;
    var _a = req.body, ailment_type = _a.ailment_type, ailment_name = _a.ailment_name, ailment_description = _a.ailment_description, image = _a.image, prescription = _a.prescription, treatment_plan = _a.treatment_plan;
    var encryptedAilment = encryption_js_1.encrypt(req.body);
    ailments_1.updateAilment(ailment_id, encryptedAilment)
        .then(function (_a) {
        var ailment = _a[0];
        var decryptedAilment = encryption_js_1.decrypt(ailment);
        res.status(200).send({ ailment: decryptedAilment });
    })["catch"](next);
};
exports.deleteAilmentData = function (req, res, next) {
    var ailment_id = req.params.ailment_id;
    ailments_1.deleteAilment(ailment_id)
        .then(function (output) {
        if (output === 1)
            res.sendStatus(204);
        else
            next({ status: 404 });
    })["catch"](next);
};
