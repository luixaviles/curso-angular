'use strict';

angular.module('uiApp')
    .controller('AngularCtrl', 
    function (NgTableParams, Course, lodash, dialogs) {
        var vm = this;
        vm.getAge = getAge;
        vm.edit = edit;

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

        function edit(student){
            var options = {
                size: 'lg',
                animation:true
            };
            var dialog = dialogs.create(
                'app/main/list/angular/edit-dialog/edit-dialog.html',
                'AngularEditController',
                student,
                options,
                'vmAngularEdit');
        }

    });
