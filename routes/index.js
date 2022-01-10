var express = require('express');  // include on all routes 
var router = express.Router();  // include on all routes 
// no controller needed on this one since it's just a redirect 

/* redirect index to /flights */
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;  // include on all routes 
