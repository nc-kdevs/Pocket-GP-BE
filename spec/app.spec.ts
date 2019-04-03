process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const supertest = require('supertest');
const connection = require('../db/connection.js');
const appTest = require('../app.js');
import {Response} from 'express';


const request = supertest(appTest);

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe('/gps', () => {

  });
  describe('/patients', () => {

  });
  describe.only('/surgeries', () => {
    it('GET 200 returns a list of all the surgeries', () => {
      return request.get('/api/surgeries').expect(200).then((res: any)=> {
        expect(res.body.surgeries[0]).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
      })
    });
    it('POST 201 return a posted surgery', () => {
      const newSurgery = {surgery_name: 'New Surgery', surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th'};
      return request.post('/api/surgeries').send(newSurgery).expect(201).then((res: any) => {
        expect(res.body.surgery).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
      })
    })
  });
});

