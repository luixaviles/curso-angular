/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cursos              ->  index
 */

'use strict';
var jsonFile = require('jsonfile');
var lodash = require('lodash');//libreria paara procesar arreglos
var path = require('path');//construir rutas o paths
var FILE = path.resolve('db','cursos.json');

export function getAll(req,res)
{
  jsonFile.readFile(FILE,function(err,obj){
    if(err)
    {
      res.status(500).sent('Internal Server Error')
    }

    res.json(obj);

  });
}

export function get(req,res)
{
 
 jsonFile.readFile(FILE,function(err,obj){
  var array =lodash.find(obj.courses,function(course){
    return course.key===req.params.id;
  });

  if(!array)
  {
    res.status(404).sent('Not Found');
  }
  res.json(array);

 });
 
}

// Gets a list of Cursos
export function index(req, res) {
  res.json([]);
  
}
