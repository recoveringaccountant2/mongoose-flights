var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
const ticketsCtrl = require('../controllers/tickets');

/* ticket routes */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.delete('/tickets/:id', ticketsCtrl.delete);

module.exports = router;  // include on all routes 
