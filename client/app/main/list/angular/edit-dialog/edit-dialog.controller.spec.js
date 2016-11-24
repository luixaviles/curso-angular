'use strict';

describe('Controller: EditDialogController', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var controller,
    $uibModalInstance,
    $q,
    scope,
    Course,
    deferred;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$q_, _Course_) {
    scope = $rootScope.$new();
    Course = _Course_;
    $q = _$q_;
    deferred = $q.defer();

    // spyOn(Course, 'update').and.callThrough();
    spyOn(Course, 'update').and.returnValue(deferred.promise);

    $uibModalInstance =
      jasmine.createSpyObj('$uibModalInstance', [
        'close',
        'dismiss'
      ]);
    controller = $controller('AngularEditController', {
      $scope: scope,
      $uibModalInstance: $uibModalInstance,
      data: {

      },
      Course: Course
    });
  }));

  it('should allow fill data', function () {
    expect(controller.selected).toBeDefined();
  });

  it('should allow save changes', function () {
    deferred.resolve({
      status: 200
    });
    // deferred.reject({
    //   status: 401
    // });
    
    controller.saveChanges();
    expect(Course.update).toHaveBeenCalled();
  });

  it('should allow close dialog', function () {
    controller.close();
    expect($uibModalInstance.close).toHaveBeenCalled();
  });


  it('should allow open date selector', function () {
    expect(controller.isDateOpened).toBe(false);
    expect(controller.isDateOpened).toBeFalsy();
    controller.openDateSelector();
    expect(controller.isDateOpened).toBeTruthy();
  });
});
