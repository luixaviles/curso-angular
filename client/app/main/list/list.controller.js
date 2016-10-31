'use strict';

angular.module('uiApp')
    .controller('ListCtrl', function ($state, lodash) {
        var vm = this;
        vm.tabs = [
            {
                index: 0,
                title: 'Angular',
                state: 'angular',
                active: true
            },
            {
                index: 1,
                title: 'Java',
                state: 'java',
                active: false
            }
        ];
        vm.default = vm.tabs[0];
        vm.select = select;

        activate();

        function activate() {
            var current = lodash.find(vm.tabs, function (tab) {
                return tab.state === $state.current.name;
            });

            select(current ? current.index : vm.default.index);
        }

        function select(index) {
            vm.selected = vm.tabs[index];
            $state.go(vm.selected.state);
        }
    });
