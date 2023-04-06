'use strict';

const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the express server', () => {
  test('Just an empty test file', async () => {
    expect(true).toEqual(true);
  });
});