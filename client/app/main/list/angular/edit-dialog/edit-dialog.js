'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-dialog', {
        url: '/edit-dialog',
        templateUrl: 'app/main/list/angular/edit-dialog/edit-dialog.html',
        controller: 'EditDialogCtrl'
      });
  });
