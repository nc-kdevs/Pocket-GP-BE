process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const supertest = require('supertest');
const connection = require('../db/connection.js');
const appTest = require('../app');
import { Request, Response } from 'express';

const request = supertest(appTest);

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe('/gps', () => {

  });
  describe('/patients', () => {
    it('GET 200 /username returns a single patients data', () => {
      return request.get('/api/patients/billybob22').expect(200).then(({ body }: any) => {
        expect(body.patient).to.contain.keys('patient_username', 'patient_password', 'first_name', 'surname', 'telephone', 'email', 'address', 'surgery_id', 'emerg_contact', 'general_med')
      })
    })
    it('PATCH 200 /username update patients data and return updated patient', () => {
      const updatePatient = { patient_username: '', patient_password: '', first_name: 'Jimmy', surname: '', telephone: '', email: '', address: '', surgery_id: '', emerg_contact: '', general_med: '' }
      return request.patch('/api/patients/billybob22').send(updatePatient).expect(200).then(res => {
        expect(res.body.patient.first_name).to.equal('Jimmy')
      })
    })
    it('DELETE 204 /username deletes patient object when given a valid username', () => {
      request.delete('/api/patients/billybob22').expect(204);
    })
    it('GET 200 /surgery_id returns list of all patients', () => {
      return request.get('/api/patients?surgery_id=1').expect(200).then(({ body }: any) => {
        expect(body.patients).to.contain.keys('patient_username', 'patient_password', 'first_name', 'surname', 'telephone', 'email', 'address', 'surgery_id', 'emerg_contact', 'general_med')
      })
    })
    it('POST 201 return a posted patient', () => {
      const newPatient = { patient_username: 'newpatient', patient_password: 'newpatient123', first_name: 'patientfirstname', surname: 'patientsurname', telephone: '07122345345', email: 'newpatient@gmail.com', address: '12 new patient M53LA', surgery_id: '1', emerg_contact: '07565637432', general_med: 'paracetamol,lanzoprozel' }
      return request.post('/api/patients').send(newPatient).expect(201).then((res: any) => {
        expect(res.body.patient).to.contain.keys('patient_username', 'patient_password', 'first_name', 'surname', 'telephone', 'email', 'address', 'surgery_id', 'emerg_contact', 'general_med')
      })
    })
  });

  describe('/patients/:username/ailments', () => {
    it('GET 200 returns ailments by patient username', () => {
      return request.get('/api/patients/spike/ailments').expect(200).then((res: any) => {
        expect(res.body.ailments[0].ailment_type).to.equal('diabetic')
      })
    })
    it('POST / 201 returns new posted user ailment', () => {
      const ailmentObj = {
        ailment_type: 'new ail',
        ailment_name: 'new ail name',
        ailment_description: 'new ail desc',
        image: 'url',
        prescription: 'presc',
        treatment_plan: 'plan'
      }
      return request
        .post('/api/patients/spike/ailments')
        .send(ailmentObj)
        .expect(201)
        .then((res: any) => {
          expect(res.body.ailment).to.contain.keys(
            'ailment_type',
            'ailment_name',
            'ailment_description',
            'ailment_id',
            'patient_username'
          )
        });
    });

    describe('/surgeries', () => {
      it('GET 200 returns a list of all the surgeries', () => {
        return request.get('/api/surgeries').expect(200).then((res: any) => {
          expect(res.body.surgeries[0]).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
        })
      });
      it('POST 201 return a posted surgery', () => {
        const newSurgery = { surgery_name: 'New Surgery', surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
        return request.post('/api/surgeries').send(newSurgery).expect(201).then((res: any) => {
          expect(res.body.surgery).to.contain.keys('surgery_id', 'surgery_name', 'surgery_username', 'surgery_password', 'surgery_address')
        })
      })
      it('POST / responds with status 400 - Invalid Body', () => {
        const newSurgery = { surgery_username: 'newSurgery', surgery_password: 'newsurgery21', surgery_address: '121 new suregery street m21 3th' };
        return request.post('/api/surgeries').send(newSurgery).expect(400).then((res: any) => {
          expect(res.body.message).to.equal('Invalid Request')
        })
      });
      xit('DELETE / responds with status 405 - Invalid Method', () => {
        return request.delete('/api/surgeries').expect(405).then((res: any) => {
          expect(res.body.msg).to.equal('Method Not Allowed')
        })
      });
    });
  });
});