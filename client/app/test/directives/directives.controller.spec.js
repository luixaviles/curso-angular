'use strict';

describe('Controller: DirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var DirectivesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectivesCtrl = $controller('DirectivesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
