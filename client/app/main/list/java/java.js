'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('java', {
          parent: 'list',
          url: '/java',
          templateUrl: 'app/main/list/java/java.html',
          controller: 'JavaCtrl as vmJava'
      });
  });
