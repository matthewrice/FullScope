// libraries and frameworks
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var User = require('./models/user');

// components being used in the router
var Signup = require('./components/signup.jsx');
var Login = require('./components/login.jsx');
var Dashboard = require('./components/dashboard.jsx');
var RecipientCreateProfile = require('./components/recipient-create-profile.jsx');
var SupporterCreateProfile = require('./components/supporter-create-profile.jsx');

// router for entire app
var Router = Backbone.Router.extend({
  routes: {
    '': 'dashboard',
    'dashboard': 'dashboard',
    'signup': 'signup',
    'login': 'login',
    'recipientcreateprofile': 'recipientCreateProfile',
    'supportercreateprofile': 'supporterCreateProfile'
  },
  intialize: function(){
    var user = new User();
    user.restore();
  },
  dashboard: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(Dashboard, {router: self}),
      document.getElementById('app')
    );
  },
  signup: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(Signup, {router: self}),
      document.getElementById('app')
    );
  },
  login: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(Login, {router: self}),
      document.getElementById('app')
    );
  },
  recipientCreateProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(RecipientCreateProfile, {router: self}),
      document.getElementById('app')
    )
  },
  supporterCreateProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterCreateProfile, {router: self}),
      document.getElementById('app')
    );
  }
});

// instantiation of the router
var router = new Router();

// exporting of router so it can be required into index.js
module.exports = router;