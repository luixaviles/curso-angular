'use strict';

describe('Service: course', function () {

  // load the service's module
  beforeEach(module('uiApp'));

  // instantiate service
  var course;
  beforeEach(inject(function (_course_) {
    course = _course_;
  }));

  it('should do something', function () {
    expect(!!course).toBe(true);
  });

});
