'use strict';

angular.module('uiApp', [
  'uiApp.constants',
  'ngCookies',
  'ngLodash',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngTable',
  'dialogs.main',
  'angular-momentjs',
  'cgBusy'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
