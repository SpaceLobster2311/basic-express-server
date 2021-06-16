'use strict';

const supertest = require('supertest');
const server = require('../lib/server.js');
const request = supertest(server.app);

describe('API Server', () =>{
  it('Testing true to be true', async () => {
    const response = await request.get('/?name=alex');
    expect(response.status).toEqual(200);
  });
});