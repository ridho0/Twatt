// const OAuth = require('oauth')
const twitter = require('../models/twitter')
const methods = {}

methods.search = function(req, res) {
  twitter.search(req, res)
}
methods.recent = function(req, res) {
  twitter.recent(req, res)
}
methods.updateStatus = function(req, res) {
  twitter.updateStatus(req, res)
}

module.exports = methods
