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
