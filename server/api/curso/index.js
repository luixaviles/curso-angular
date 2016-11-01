'use strict';

var express = require('express');
var controller = require('./curso.controller');

var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.put('/:id/:student', controller.update);
// localhost:9000/api/cursos/angular/123

module.exports = router;
