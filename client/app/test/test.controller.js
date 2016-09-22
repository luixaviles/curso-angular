'use strict';

angular.module('uiApp')
  .controller('TestController', 
  function (UserService) {
    var controller = this;
    controller.message = 'Bienvenidos';
    controller.test = {
      nombre: 'Juan',
      curso: 'Angular',
      edad: 25
    };

    controller.sumar = function(a, b) {
      console.log('Sumando', a, b);
      return a+b;
    };

    controller.items = [
      {nombre: 'Luis', id: 12345},
      {nombre: 'Jorge', id: 12344},
      {nombre: 'Pedro', id: 12343}      
      ];

    controller.sayHello = function(name) {
      return UserService.sayHello(name);
    } 

  });
