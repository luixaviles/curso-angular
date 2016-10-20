'use strict';

var app = require('../..');
import request from 'supertest';

describe('Curso API:', function() {

  describe('GET /api/cursos', function() {
    var cursos;

    beforeEach(function(done) {
      request(app)
        .get('/api/cursos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cursos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cursos.should.be.instanceOf(Array);
    });

  });

});
