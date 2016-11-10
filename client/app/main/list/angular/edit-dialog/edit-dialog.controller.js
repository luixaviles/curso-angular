(function () {
  'use strict';

  angular
    .module('uiApp')
    .controller('AngularEditController', AngularEditController);

  AngularEditController.$inject = ['$moment', '$uibModalInstance', 'Course', 'data'];

  function AngularEditController($moment, $uibModalInstance, Course, data) {
    var vm = this;
    vm.openDateSelector = openDateSelector;
    vm.saveChanges = saveChanges;
    vm.isDateOpened = false;
    vm.dateOptions = {
      maxDate: new Date()
    };
    vm.dateFormat = 'dd-MM-yyyy';
    vm.close = close;

    activate();

    function activate() {
      data.birthDateObject = $moment(data.birthDate, 'DD-MM-YYYY').toDate();
      console.log('received', data);
      vm.selected = data;
    }

    function close() {
      $uibModalInstance.close();
    }

    function openDateSelector() {
      vm.isDateOpened = true;
    }

    function saveChanges() {
      vm.selected.birthDate = 
      $moment(data.birthDateObject).format('DD-MM-YYYY');
      vm.promise = Course.update(
        vm.selected,
        {
          id: 'angular',
          student: data.id
        }
        );
        vm.promise.then(function(response){
            $uibModalInstance.close(response);
        });
    }
  }
})();

