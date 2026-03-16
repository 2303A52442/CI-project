const request = require('supertest');
const app = require('../index'); // Adjust the path if necessary

describe('GET /', () => {
    it('should return a message indicating the server is running', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Server is running!');
    });
});