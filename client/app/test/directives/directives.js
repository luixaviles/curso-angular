'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('directives', {
        url: '/directives',
        templateUrl: 'app/test/directives/directives.html',
        controller: 'DirectivesCtrl',
        controllerAs:  'vm'
      });
  });
