'use strict';

angular.module('uiApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('list', {
                parent: 'main',
                url: 'list',
                templateUrl: 'app/main/list/list.html',
                controller: 'ListCtrl as vmList'
            });
    });
