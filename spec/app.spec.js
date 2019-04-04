"use strict";
exports.__esModule = true;
process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var supertest = require('supertest');
var connection = require('../db/connection.js');
var appTest = require('../app');
var request = supertest(appTest);
// console.log(appTest)
describe('/', function () {
    beforeEach(function () {
        console.log(appTest.listeners());
        return connection.seed.run();
    });
    after(function () { return connection.destroy(); });
    describe('/gps', function () {
    });
    describe('/patients', function () {
    });
    describe('/surgeries', function () {
        it('GET 200 returns a list of all the surgeries', function () {
            return request.get('/api/surgeries').expect(200).then(function (res) {
                expect(res.body.surgeries[0]).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address');
            });
        });
        it('POST 201 return a posted surgery', function () {
            var newSurgery = { surgery_name: 'New Surgery', surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
            return request.post('/api/surgeries').send(newSurgery).expect(201).then(function (res) {
                expect(res.body.surgery).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address');
            });
        });
        xit('POST / responds with status 400 - Invalid Body', function () {
            var newSurgery = { surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
            return request.post('/api/surgeries').send(newSurgery).expect(400).then(function (res) {
                expect(res.body.message).to.equal('Invalid Request');
            });
        });
        xit('DELETE / responds with status 405 - Invalid Method', function () {
            return request["delete"]('/api/surgeries').expect(405).then(function (res) {
                expect(res.body.msg).to.equal('Method Not Allowed');
            });
        });
    });
    describe.only('/surgeries/:surgery_id', function () {
        it('GET 200 returns surgery by surgery_id', function () {
            return request.get('/api/surgeries/1').expect(200).then(function (res) {
                expect(res.body.surgery.surgery_name).to.equal('the ranch surgery');
            });
        });
        it('PATCH / responds with status 200 and patched surgery', function () {
            var surgeryPatch = { surgery_name: '', surgery_address: 'new surgery address' };
            return request.patch('/api/surgeries/1').send(surgeryPatch).expect(200).then(function (res) {
                console.log(res.body);
                expect(res.body.surgery.surgery_address).to.equal('new surgery address');
            });
        });
        it('DELETE / responds with status 204 and no-content', function () { return request["delete"]('/api/surgeries/1').expect(204); });
    });
});
