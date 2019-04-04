process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var supertest = require('supertest');
var connection = require('../db/connection.js');
var appTest = require('../app');
// import { Request, Response } from 'express';
var request = supertest(appTest);
// console.log(appTest)
describe('/', function () {
    beforeEach(function () { return connection.seed.run(); });
    after(function () { return connection.destroy(); });
    describe('/gps', function () {
        it('GET:200 returns a list of all gps', function () {
            return request
                .get('/api/gps')
                .expect(200)
                .then(function (res) {
                expect(res.body.gps[0]).to.contain.keys('gp_id', 'gp_name', 'surgery_id');
            });
        });
        it('GET:200 query of surgery_id returns gps with that surgery_id', function () {
            return request
                .get('/api/gps?surgery=1')
                .expect(200)
                .then(function (res) {
                expect(res.body.gps[0]).to.contain.keys('gp_id', 'gp_name', 'surgery_id');
            });
        });
        it('POST:200 returns new posted gp', function () {
            var newGp = {
                gp_name: 'Fantastic Dr Fox',
                surgery_id: 1
            };
            return request
                .post('/api/gps')
                .send(newGp)
                .expect(201)
                .then(function (res) {
                expect(res.body.gp).to.contain.keys('gp_id', 'gp_name', 'surgery_id');
            });
        });
        describe('/:gps', function () {
            it('GET:200 returns gp by id', function () {
                return request
                    .get('/api/gps/2')
                    .expect(200)
                    .then(function (res) {
                    expect(res.body.gp.gp_name).to.equal('Madame Pomfrey');
                });
            });
            it('DEL: delete gp by id', function () {
                return request["delete"]('/api/gps/2')
                    .expect(204);
            });
        });
    });
    describe('/patients', function () {
    });
    describe('/surgeries', function () {
        xit('GET 200 returns a list of all the surgeries', function () {
            return request.get('/api/surgeries').expect(200).then(function (res) {
                expect(res.body.surgeries[0]).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address');
            });
        });
        xit('POST 201 return a posted surgery', function () {
            var newSurgery = { surgery_name: 'New Surgery', surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
            return request
                .post('/api/surgeries')
                .send(newSurgery)
                .expect(201)
                .then(function (res) {
                expect(res.body.surgery).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address');
            });
        });
        xit('POST / responds with status 400 - Invalid Body', function () {
            var newSurgery = { surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
            return request
                .post('/api/surgeries')
                .send(newSurgery)
                .expect(400)
                .then(function (res) {
                expect(res.body.message).to.equal('Invalid Request');
            });
        });
        xit('DELETE / responds with status 405 - Invalid Method', function () {
            return request["delete"]('/api/surgeries')
                .expect(405)
                .then(function (res) {
                expect(res.body.msg).to.equal('Method Not Allowed');
            });
        });
    });
});
