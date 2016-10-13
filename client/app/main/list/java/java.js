'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('java', {
        url: '/java',
        templateUrl: 'app/main/list/java/java.html',
        controller: 'JavaCtrl'
      });
  });
