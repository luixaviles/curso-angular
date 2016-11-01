'use strict';

angular.module('uiApp')
  .service('Course', function ($q, $resource) {
    var resource = $resource('/api/cursos/:id/:student', {
      id: '@id',
      student: '@student'
    }, {
      'put': {
        method: 'PUT'
      } 
    });

    function get(id) {
      var course = $q.defer();
      resource.get({id: id}).$promise.then(function(response){
        course.resolve(response);
      }, function(error){
        course.reject(error);
      });

      return course.promise;
    }

    function update(data, params) {
      var student = $q.defer();
      resource.put({
        id: params.id,
        student: params.student
      }, data).$promise.then(function(response){
        student.resolve(response);
      }, function(error){
        student.reject(error);
      });

      return student.promise;
    }

    return {
      get: get,
      update: update
    };
  });
