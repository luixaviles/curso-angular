'use strict';

describe('Controller: AngularCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var AngularCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularCtrl = $controller('AngularCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
