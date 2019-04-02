"use strict";
exports.__esModule = true;
var expect = require('chai').expect;
var utils_1 = require("../db/utils/utils");
describe('formatGpData', function () {
    it('returns array', function () {
        expect(utils_1.formatGpData([])).to.be.an('array');
    });
    it('returns objects with keys gp_id, surgery_id, gp_name', function () {
        var input = [{
                gp_id: 1,
                surgery_id: 1,
                gp_name: 'a'
            }];
        expect(utils_1.formatGpData(input)[0]).to.have.all.keys('gp_id', 'surgery_id', 'gp_name');
    });
});
