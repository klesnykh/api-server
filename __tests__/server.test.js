'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const db1 = require('../src/models/clothes');
const db2 = require('../src/models/food');

beforeAll(async () => {
  await db1.sequelize.sync();
  await db2.sequelize.sync();
});
afterAll(async () => {
  await db1.sequelize.drop();
  await db2.sequelize.drop();
});

describe('Testing the express server bad methods/routes', () => {
  test('Should respond with a 404 on a bad route', async () => {
    const response = await request.get('/message');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });

  test('Should respond with a 404 on a bad method', async () => {
    const response = await request.patch('/clothes');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
});

describe('Testing CRUD on clothes route', () => {
  test('Should respond with a 200 if new clothes record created', async () => {
    const response = await request.post('/clothes').send({name: 'jeans', on: true});
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('jeans');
    expect(response.body.on).toEqual(true);
  });

  test('Should respond with a 200 if new food record created', async () => {
    const response = await request.post('/food').send({name: 'banana', good: true});
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('banana');
    expect(response.body.good).toEqual(true);
  });

  test('Should respond with a 200 if can retrieve all clothes items', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test('Should respond with a 200 if can retrieve a clothes item', async () => {
    const response = await request.get('/clothes/0');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(0);
  });

  test('Should respond with a 200 if can update a clothes items', async () => {
    const response = await request.put('/clothes/4').send({name: 'jeans', on: false});
    expect(response.status).toEqual(200);
    expect(response.body.on).toEqual(false);
  });

  xtest('Should respond with a 200 if can delete a clothes items', async () => {
    const response = await request.delete('/clothes/3');
    expect(response.status).toEqual(200);
  });

});