"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchSurgeries = function () {
    return connection.select('*').from('surgeries');
};
exports.addSurgery = function (newSurgery) {
    return connection.insert(newSurgery).into('surgeries').returning('*');
};
exports.fetchSurgeryByID = function (surgeryID) {
    return connection.select('*').groupBy('surgeries.surgery_id').from('surgeries').where('surgeries.surgery_id', '=', surgeryID).returning('*');
};
exports.updateSurgery = function (surgery_id, _a) {
    var surgery_name = _a.surgery_name, surgery_address = _a.surgery_address;
    var updateObj = {};
    if (surgery_name)
        updateObj.surgery_name = surgery_name;
    if (surgery_address)
        updateObj.surgery_address = surgery_address;
    return connection.select('*').from('surgeries').where({ surgery_id: surgery_id }).update(updateObj).returning('*');
};
// export const updateAilment = (ailment_id: number, { ailment_type, ailment_name, ailment_description, image, prescription, treatment_plan }) => {
//   const updateObj: any = {};
//   if (ailment_type) updateObj.ailment_type = ailment_type;
//   if (ailment_name) updateObj.ailment_name = ailment_name;
//   if (ailment_description) updateObj.ailment_description = ailment_description;
//   if (image) updateObj.image = image;
//   if (prescription) updateObj.prescription = prescription;
//   if (treatment_plan) updateObj.treatment_plan = treatment_plan;
//   return connection('ailments').where({ ailment_id }).update(updateObj).returning('*');
// }
