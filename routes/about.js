var express = require('express');
var router = express.Router();

router.get('/gptAbout/', function(req, res, next) {
  res.render('gptAbout');
});
  
module.exports = router;