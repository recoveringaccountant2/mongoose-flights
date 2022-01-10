var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
const flightsCtrl = require('../controllers/flights');

/* flight routes */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
router.delete('/:id', flightsCtrl.delete);

module.exports = router;  // include on all routes 
