process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const supertest = require('supertest');
const connection = require('../db/connection.js');
const appTest = require('../app');
// import { Request, Response } from 'express';

const request = supertest(appTest);
// console.log(appTest)

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe('/gps', () => {

  });
  describe('/patients', () => {

  });
  describe('/surgeries', () => {
    it('GET 200 returns a list of all the surgeries', () => {
      return request.get('/api/surgeries').expect(200).then((res: any) => {
        expect(res.body.surgeries[0]).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
      })
    });
    it('POST 201 return a posted surgery', () => {
      const newSurgery = { surgery_name: 'New Surgery', surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
      console.log(appTest.listeners(), '<-- listeners during 2');
      return request
      .post('/api/surgeries')
      .send(newSurgery)
      .expect(201)
      .then((res: any) => {
        expect(res.body.surgery).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
      })
    })
    it('POST / responds with status 400 - Invalid Body', () => {
      const newSurgery = { surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
      return request
      .post('/api/surgeries')
      .send(newSurgery)
      .expect(400)
      .then((res: any) => {
        expect(res.body.message).to.equal('Invalid Request')
      })
    });
    xit('DELETE / responds with status 405 - Invalid Method', () => {
      return request
      .delete('/api/surgeries')
      .expect(405)
      .then((res: any) => {
        expect(res.body.msg).to.equal('Method Not Allowed')
      })
    });
  });
});