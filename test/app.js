var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var request = require('supertest');
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