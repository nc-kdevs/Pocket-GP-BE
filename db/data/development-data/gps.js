"use strict";
exports.__esModule = true;
var GP = /** @class */ (function () {
    function GP(gp_id, surgery_id, gp_name) {
        this.gp_id = gp_id;
        this.surgery_id = surgery_id;
        this.gp_name = gp_name;
    }
    return GP;
}());
var gp1 = new GP(1, 1, 'Doctor Krieger');
var gp2 = new GP(2, 1, 'Madame Pomfrey');
var gp3 = new GP(3, 1, 'Doctor Zoidberg');
exports.gps = [gp1, gp2, gp3];
