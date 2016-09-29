'use strict';

angular.module('uiApp')
  .controller('DirectivesCtrl', function () {
    var vm = this;

    vm.message = 'success';
    // vm.showMenu = true;
    vm.show = true;
    vm.showMenu = function(){
      vm.show = !vm.show;
      return vm.show;
    };
    
  });
