'use strict';

angular.module('uiApp')
  .service('Course', function ($q, $resource) {
    var resource = $resource('/api/cursos/:id', {id: '@id'});

    function get(id) {
      var course = $q.defer();
      resource.get({id: id}).$promise.then(function(response){
        course.resolve(response);
      }, function(error){
        course.reject(error);
      });

      return course.promise;
    }
    return {
      get: get
    };
  });
