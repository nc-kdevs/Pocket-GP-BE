process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var supertest = require('supertest');
var connection = require('../db/connection.js');
var appTest = require('../app.js');
var request = supertest(appTest);
describe('/', function () {
    beforeEach(function () { return connection.seed.run(); });
    after(function () { return connection.destroy(); });
    describe('/gps', function () {
    });
    describe('/patients', function () {
    });
    describe('/surgeries', function () {
        it('GET 200 returns a list of all the surgeries', function () {
            return request.get('/api/surgeries').expect(200);
        });
    });
    describe('/ailments', function () {
    });
});
