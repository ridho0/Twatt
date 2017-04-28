const express = require('express')
const app = express()

var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
require('dotenv').config()

passport.use(new Strategy({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackURL: 'http://localhost:3000/login/twitter/return'
  // callbackURL: 'http://127.0.0.1:3000/login/twitter/return'
},
function(token, tokenSecret, profile, cb) {
  // In this example, the user's Twitter profile is supplied as the user
  // record.  In a production-quality application, the Twitter profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  console.log("========================");
  console.log(token);
  console.log(tokenSecret);
  console.log(profile);
  console.log("=========================");
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.set('port', process.env.PORT || 3000)


app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());

app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('body-parser').json())

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', require('./routes'))

app.listen(app.get('port'), function() {
  console.log('Listening on port' + app.get('port'));
})
