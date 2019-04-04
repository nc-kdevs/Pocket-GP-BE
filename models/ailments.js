"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchAilment = function (ailment_id) {
    return connection.select('*').from('ailments').where({ ailment_id: ailment_id });
};
exports.updateAilment = function (ailment_id, _a) {
    var ailment_type = _a.ailment_type, ailment_name = _a.ailment_name, ailment_description = _a.ailment_description, image = _a.image, prescription = _a.prescription, treatment_plan = _a.treatment_plan;
    var updateObj = {};
    if (ailment_type)
        updateObj.ailment_type = ailment_type;
    if (ailment_name)
        updateObj.ailment_name = ailment_name;
    if (ailment_description)
        updateObj.ailment_description = ailment_description;
    if (image)
        updateObj.image = image;
    if (prescription)
        updateObj.prescription = prescription;
    if (treatment_plan)
        updateObj.treatment_plan = treatment_plan;
    return connection('ailments').where({ ailment_id: ailment_id }).update(updateObj).returning('*');
};
