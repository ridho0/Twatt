const OAuth = require('oauth')
const twitter = require('../models/twitter')
const methods = {}

methods.search = function(req, res) {
  twitter.search(req, res)
}

module.exports = methods
