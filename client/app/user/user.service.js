'use strict';

function UserService() {
  this.sayHello = function(name) {
    return 'Hola ' + name;
  };

  this.STATUS = {
    REGISTRADO: 'registrado'
  };

}

angular.module('uiApp')
  .service('UserService', UserService);


