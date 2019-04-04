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
    it('GET:200 returns a list of all gps', () => {
      return request
      .get('/api/gps')
      .expect(200)
      .then((res: any) => {
        expect(res.body.gps[0]).to.contain.keys(
          'gp_id',
          'gp_name',
          'surgery_id'
        )
      });
    });
    it('GET:200 query of surgery_id returns gps with that surgery_id', () => {
      return request
      .get('/api/gps?surgery=1')
      .expect(200)
      .then((res: any) => {
        expect(res.body.gps[0]).to.contain.keys(
          'gp_id',
          'gp_name',
          'surgery_id'
        )
      });
    });
    it('POST:200 returns new posted gp', () => {
      const newGp = {
        gp_name: 'Fantastic Dr Fox',
        surgery_id: 1
      }
      return request
      .post('/api/gps')
      .send(newGp)
      .expect(201)
      .then((res: any) => {
        expect(res.body.gp).to.contain.keys(
          'gp_id',
          'gp_name',
          'surgery_id'
        )
      });
    });
    describe('/:gps', () => {
      it('GET:200 returns gp by id', () => {
        return request
        .get('/api/gps/2')
        .expect(200)
        .then((res: any) => {
          expect(res.body.gp.gp_name).to.equal('Madame Pomfrey')
      })
      });
      it('DEL: delete gp by id', () => {
        return request
          .delete('/api/gps/2')
          .expect(204)
      })
    });
  });
  describe('/patients', () => {

  });
  describe('/surgeries', () => {
    xit('GET 200 returns a list of all the surgeries', () => {
      return request.get('/api/surgeries').expect(200).then((res: any) => {
        expect(res.body.surgeries[0]).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
      })
    });
    xit('POST 201 return a posted surgery', () => {
      const newSurgery = { surgery_name: 'New Surgery', surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
      return request
      .post('/api/surgeries')
      .send(newSurgery)
      .expect(201)
      .then((res: any) => {
        expect(res.body.surgery).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
      })
    })
    xit('POST / responds with status 400 - Invalid Body', () => {
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