'use strict';

angular.module('uiApp')
    .controller('AngularCtrl', function (NgTableParams) {
        var vm = this;
        var data = [
            {
                name: 'Juan',
                age: 25
            },
            {
                name: 'maria',
                age: 26
            }
        ];

        vm.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            dataset: data
        });
    });
