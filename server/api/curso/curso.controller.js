/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cursos              ->  index
 */

'use strict';
var jsonfile = require('jsonfile');
var lodash = require('lodash');
var path = require('path');
var FILE = path.resolve('db', 'cursos.json');

// Gets a list of Cursos
export function getAll(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    res.json(obj);
  });
}

export function get(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }

    var array = lodash.find(obj.courses, function(course){
      return course.key === req.params.id
    });

    if(!array) {
      res.status(404).send('Not Found');
    }

    res.json(array);
  });
}

export function update(req, res) {
  console.log('Running update');
  jsonfile.readFile(FILE, function (err, obj) {
    var result = null;
    var course = lodash.find(obj.courses, function (course) {
      return course.key === req.params.id;
    });

    if (!course) {
      res.status(404).send('Course Not found: ' + req.params.courseKey);
    }

    lodash.forEach(course.students, function (student) {
      if (student.id == req.params.student) {
        student.name = req.body.name;
        student.birthDate = req.body.birthDate;
        result = student;
      }
    });

    if (!result) {
      res.status(404).send('Error 404');
    }

    setTimeout(function () {
      jsonfile.writeFile(FILE, {courses: obj.courses}, function (err) {
        console.error(err);
        //res.status(500).send('Error 500');
      });
      res.status(200).type('json').json(result);
    }, 2000);//force delay of 2 seconds.
  });
}
