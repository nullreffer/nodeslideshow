var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/setalbum', function(req, res, next) {
  fs.writeFileSync('config' + path.sep + 'album', req.query.name, 'utf8');
  res.send('OK');
});

module.exports = router;
