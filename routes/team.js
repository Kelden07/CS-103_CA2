var express = require('express');
var router = express.Router();

router.get('/team/', function(req, res,next) {
  res.render('gptTeam');
});

module.exports = router;