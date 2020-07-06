/** Imports */
const router = require('express').Router();

/** Controllers */
const projectController = require('../controllers/project.controller');

/** API Endpoints */

/** Project Endpoints */
router.get('/projects/', projectController.all);

/** Exports */
module.exports = router;