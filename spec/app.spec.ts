process.env.NODE_ENV = 'test';

process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const supertest = require('supertest');
const connection = require('../db/connection.js');
const appTest = require('../app.js');

const request = supertest(appTest);

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());

})