'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cursoCtrlStub = {
  index: 'cursoCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var cursoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './curso.controller': cursoCtrlStub
});

describe('Curso API Router:', function() {

  it('should return an express router instance', function() {
    cursoIndex.should.equal(routerStub);
  });

  describe('GET /api/cursos', function() {

    it('should route to curso.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cursoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
