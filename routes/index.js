const router = require('express').Router()
const OAuth = require('oauth')
const twitter = require('../controllers/twitter')


router.get('/search/:search', twitter.search);
router.get('/recent', twitter.recent);
router.post('/updateStatus/:status', twitter.updateStatus);



module.exports = router;
