const router = require('express').Router()
const OAuth = require('oauth')
const twitter = require('../controllers/twitter')


router.get('/search/:search', twitter.search);



module.exports = router;
