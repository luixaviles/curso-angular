'use strict';

angular.module('uiApp')
    .controller('AngularCtrl', 
    function (NgTableParams, Course, lodash) {
        var vm = this;
        vm.getAge = getAge;

        activate();

        function activate() {
            console.log('activate');
            vm.tableParams = new NgTableParams({}, {
                filterDelay: 0,
                getData: getData
            });
        }

        function getData(params) {
            console.log('getData');
            return Course.get('angular').then(function(response){
                lodash.map(response.students, function(s){
                    s.age = getAge(s.birthDate);
                });

                return response.students;
            });
        }

        function getAge(birthDate){
            return '25';
        }

    });
