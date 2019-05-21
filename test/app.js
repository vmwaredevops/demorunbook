const request = require('supertest');
const app = require('../app');

describe('Index', function () {
    it('responds to /', function testSlash(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('404 if invalid URL', function testPath(done) {
        request(app)
            .get('/foo/bar')
            .expect(404, done);
    });
});