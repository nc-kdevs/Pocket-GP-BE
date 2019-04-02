process.env.NODE_ENV = 'test';
process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var supertest = require('supertest');
var connection = require('../db/connection.js');
var appTest = require('../app.js');
var request = supertest(appTest);
describe('/', function () {
    beforeEach(function () { return connection.seed.run(); });
    after(function () { return connection.destroy(); });
});
