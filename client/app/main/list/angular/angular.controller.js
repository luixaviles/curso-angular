'use strict';

angular.module('uiApp')
    .controller('AngularCtrl', function (NgTableParams, Course) {
        var vm = this;
        // var data = [
        //     {
        //         name: 'Juan',
        //         age: 25
        //     },
        //     {
        //         name: 'maria',
        //         age: 26
        //     }
        // ];

        activate();

        function activate() {
            vm.tableParams = new NgTableParams({}, {
                filterDelay: 0,
                getData: getData
            });
        }

        function getData() {
            return Course.get('angular').then(function(response){
                return response.students;
            });
        }

        

    });
