const OAuth = require('oauth')
require('dotenv').config()
const methods = {}

methods.search = function(req, res) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
  oauth.get(
    // 'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    'https://api.twitter.com/1.1/search/tweets.json?q=%23'+req.params.search,
    process.env.USER_TOKEN, //test user token
    process.env.USER_SECRET, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
}

methods.recent = function(req, res) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        process.env.USER_TOKEN, //test user token
        process.env.USER_SECRET, //test user secret
        function (e, data){
          if (e) console.error(e);
          res.send(data)
        });
}

methods.updateStatus = function(req, res) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${req.params.status}`,
        process.env.USER_TOKEN, //test user token
        process.env.USER_SECRET, //test user secret
        req.params.status, "text",
        function (e, data){
          if (e) console.error(e);
          res.send(data)
        });
}

module.exports = methods
