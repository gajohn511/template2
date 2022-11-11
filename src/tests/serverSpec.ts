import supertest, { Response } from 'supertest';
// import app from '../simple-server';

// const request = supertest(app);
// describe('Test endpoint response', () => {
//     it('gets the api endpoint', async () => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//     });
// });

const request = supertest('http://localhost:5000');

describe("end point test '/api' ", () => {
    let response: Response;

    beforeAll(async () => {
        response = await request.get('/api');
    });

    it('should expect a status of 200', () => {
        expect(response.status).toBe(200);
    });
});
