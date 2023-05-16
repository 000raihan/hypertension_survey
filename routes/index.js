var express = require('express');
var router = express.Router();

const Survey = require('../controllers/Survey');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WKD Questionaire' });
});

router.post('/submit/save', Survey.save);

router.get('/success', function(req, res, next) {
  res.render('success', { title: 'WKD Questionaire' });
});
router.get('/error', function(req, res, next) {
  res.render('error', { title: 'WKD Questionaire' });
});

module.exports = router;
