'use strict';

describe('Controller: JavaCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var JavaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JavaCtrl = $controller('JavaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
