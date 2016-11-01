(function () {
  'use strict';

  angular
    .module('uiApp')
    .controller('AngularEditController', AngularEditController);

  AngularEditController.$inject = ['Course', 'data'];

  function AngularEditController(Course, data) {
    var vm = this;
    vm.openDateSelector = openDateSelector;
    vm.saveChanges = saveChanges;
    vm.isDateOpened = false;
    vm.dateOptions = {
      maxDate: new Date()
    };

    activate();

    function activate() {
      console.log('received', data);
      vm.selected = data;
    }

    function openDateSelector() {
      vm.isDateOpened = true;
    }

    function saveChanges() {

    }
  }
})();

