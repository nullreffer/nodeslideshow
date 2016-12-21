var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return !fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function rand(max) {
  min = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var dirs = getDirectories('.' + path.sep + 'public' + path.sep + 'images');
  var album;
  if (fs.existsSync('config' + path.sep + 'album')) album = fs.readFileSync('config' + path.sep + 'album', 'utf8');
  if (!fs.existsSync('.' + path.sep + 'public' + path.sep + 'images' + path.sep + album)) album = dirs[rand(dirs.length)];
  
  var pics = getFiles('.' + path.sep + 'public' + path.sep + 'images' + path.sep + album); 
  for (x = 0; x < pics.length; x++) pics[x] = 'images/' + album + '/' + pics[x];

  res.render('index', { title: 'Express', albums: dirs, pics: pics });
});

module.exports = router;
