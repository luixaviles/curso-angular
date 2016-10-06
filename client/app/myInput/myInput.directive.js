'use strict';

angular.module('uiApp')
  .directive('myInput', function () {
    return {
      templateUrl: 'app/myInput/myInput.html',
      restrict: 'EAC',
      link: function (scope, element, attrs) {
      }
    };
  });
