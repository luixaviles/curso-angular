'use strict';

angular.module('uiApp')
  .filter('myFilter', function () {
    return function (input, param) {
      console.log('myFilter', param);
      if(param === 'm')
        return input.toLowerCase();
      else if(param === 'M')
        return input.toUpperCase();
      return input;
    };
  });
