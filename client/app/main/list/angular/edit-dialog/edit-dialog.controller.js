(function () {
  'use strict';

  angular
    .module('uiApp')
    .controller('AngularEditController', AngularEditController);

  AngularEditController.$inject = ['Course'];

  function AngularEditController(Course) {
    var vm = this;
    vm.openDateSelector = openDateSelector;
    vm.saveChanges = saveChanges;


    activate();

    function activate() {
      console.log('received', data);
    }

    function saveChanges() {

    }
  }
})();

