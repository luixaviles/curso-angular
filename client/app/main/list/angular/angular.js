'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('angular', {
          parent: 'list',
          url: '/angular',
          templateUrl: 'app/main/list/angular/angular.html',
          controller: 'AngularCtrl as vmAngular'
      });
  });
