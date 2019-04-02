"use strict";
exports.__esModule = true;
exports.formatGpData = function (gpData) {
    var formattedGpData = gpData.reduce(function (acc, val) {
        acc.push({
            gp_id: val.gp_id,
            surgery_id: val.surgery_id,
            gp_name: val.gp_name
        });
        return acc;
    }, []);
    return formattedGpData;
};
