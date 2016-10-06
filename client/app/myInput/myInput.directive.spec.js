'use strict';

describe('Directive: myInput', function () {

  // load the directive's module and view
  beforeEach(module('uiApp'));
  beforeEach(module('app/myInput/myInput.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-input></my-input>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myInput directive');
  }));
});
