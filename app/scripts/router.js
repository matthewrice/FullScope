// libraries and frameworks
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

// components being used in the router
var Signup = require('./components/signup.jsx');
var Login = require('./components/login.jsx');
var Dashboard = require('./components/dashboard.jsx');

// router for entire app
var Router = Backbone.Router.extend({
  routes: {
    '': 'dashboard',
    'dashboard': 'dashboard',
    'signup': 'signup',
    'login': 'login'
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
  }
});

// instantiation of the router
var router = new Router();

// exporting of router so it can be required into index.js
module.exports = router;
