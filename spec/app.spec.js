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
    describe.only('/patients', function () {
        it('GET 200 /username returns a single patients data', function () {
            return request.get('/api/patients/billybob22').expect(200).then(function (_a) {
                var body = _a.body;
                expect(body.patient).to.contain.keys('patient_username', 'patient_password', 'first_name', 'surname', 'telephone', 'email', 'address', 'surgery_id', 'emerg_contact', 'general_med');
            });
        });
        it('PATCH 200 /username update patients data and return updated patient', function () {
            var updatePatient = { patient_username: '', patient_password: '', first_name: 'Jimmy', surname: '', telephone: '', email: '', address: '', surgery_id: '', emerg_contact: '', general_med: '' };
            return request.patch('/api/patients/billybob22').send(updatePatient).expect(200).then(function (res) {
                expect(res.body.patient.first_name).to.equal('Jimmy');
            });
        });
        it.only('DELETE 204 /username deletes patient object when given a valid username', function () {
            request["delete"]('/api/patients/billybob22').expect(204);
        });
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
        it('POST / responds with status 400 - Invalid Body', function () {
            var newSurgery = { surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
            return request.post('/api/surgeries').send(newSurgery).expect(400).then(function (res) {
                expect(res.body.message).to.equal('Invalid Request');
            });
        });
        it('DELETE / responds with status 405 - Invalid Method', function () {
            return request["delete"]('/api/surgeries').expect(405).then(function (res) {
                expect(res.body.msg).to.equal('Method Not Allowed');
            });
        });
    });
});
