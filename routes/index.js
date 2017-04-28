const router = require('express').Router()
const OAuth = require('oauth')
const twitter = require('../controllers/twitter')

var passport = require('passport');


router.get('/search/:search', twitter.search);
router.get('/recent', twitter.recent);
router.post('/updateStatus/:status', twitter.updateStatus);

router.get('/login/twitter',
  passport.authenticate('twitter'));

router.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
