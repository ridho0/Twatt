const OAuth = require('oauth')
const methods = {}

methods.search = function(req, res) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'Sd1a0XjhyrgeCDDOnfb0Iv9Ju',
      'd3QU2kuFKRkPubYUShmnGmJ2acn8XAwgAKA9AwuOzcWd1MisDV',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
  oauth.get(
    // 'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    'https://api.twitter.com/1.1/search/tweets.json?q=%23'+req.params.search,
    '2199671826-eBZWswg1huNyVIvnNao3EnbBPbvFMPDlXLVteO3', //test user token
    'I7nzdtftqEZQNpcv04xxeLsWOerAiYDHtP8oEGEVQyuQm', //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
}

module.exports = methods
