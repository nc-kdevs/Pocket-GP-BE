"use strict";
exports.__esModule = true;
var Surgery = /** @class */ (function () {
    function Surgery(surgery_name, surgery_username, surgery_password, surgery_id, surgery_address) {
    }
    return Surgery;
}());
var surgery1 = new Surgery('the ranch surgery', 'ranch_surgery', 'password123', 1, 'the Ranch/shed Hill/chortlon/M21 7BB');
var surgery2 = new Surgery('lions arch surgery', 'lionsArch', 'cats4ever', 2, '101 lions arch/divinitys reach/prestwich/M8 2SP');
exports.surgeries = [surgery1, surgery2];
