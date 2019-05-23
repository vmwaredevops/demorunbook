const request = require('supertest');
const app = require('../app');

var appRequest = request(app);

describe('Get index', function () {
    before(function() {
        // Warmup request
        return appRequest.get('/');
    });

    it('responds to /', function testSlash() {
        return appRequest
            .get('/')
            .expect(200);
    });
    it('404 if invalid URL', function testPath() {
        return appRequest
            .get('/foo/bar')
            .expect(404);
    });
});

describe('Get about page', function () {
    it('responds to /about', function testSlash() {
        return appRequest
            .get('/about')
            .expect(200);
    });
});