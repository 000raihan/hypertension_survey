var express = require('express');
var router = express.Router();

const Survey = require('../controllers/Survey');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hypertension Survey' });
});

router.post('/submit/save', Survey.save);

router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Hypertension Survey' });
});
router.get('/banner', function(req, res, next) {
  res.render('banner', { title: 'Hypertension Survey' });
});
router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Hypertension Survey' });
});

module.exports = router;
