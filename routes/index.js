var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage');
});
router.get('/feedback', function(req, res, next) {
  res.render('feedback');
});
router.get('/contact-us', function(req, res, next) {
  res.render('contactus');
});
module.exports = router;
