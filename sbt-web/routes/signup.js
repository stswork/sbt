var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res) {
  res.render('signup.html', { title: 'SignUp' });
});

module.exports = router;
