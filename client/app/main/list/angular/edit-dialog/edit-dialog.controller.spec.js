'use strict';

describe('Controller: EditDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var EditDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditDialogCtrl = $controller('EditDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
