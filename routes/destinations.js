var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
const destinationCtrl = require('../controllers/destinations');

/* destination routes */
router.post('/flights/:id/destinations', destinationCtrl.create);

module.exports = router;
