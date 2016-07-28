// libraries and frameworks
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var User = require('./models/user');

// components being used in the router
var Signup = require('./components/signup.jsx');
var Login = require('./components/login.jsx');
var Dashboard = require('./components/dashboard.jsx');
var PatientFamilyCreateProfile = require('./components/patient-family-create-profile.jsx');
var PatientFamilyList = require('./components/patient-family-list.jsx');
var PatientFamilyProfile = require('./components/patient-family-profile.jsx');
var SupporterCreateProfile = require('./components/supporter-create-profile.jsx');
var SupporterProfileList = require('./components/supporter-profile-list.jsx');
var SupporterProfile = require('./components/supporter-profile.jsx');

// router for entire app
var Router = Backbone.Router.extend({
  routes: {
    '': 'dashboard',
    'dashboard': 'dashboard',
    'signup': 'signup',
    'login': 'login',
    'patientfamilycreateprofile': 'patientFamilyCreateProfile',
    'patientfamily': 'patientFamilyProfileList',
    'patientfamily/:id': 'patientFamilyProfile',
    'supportercreateprofile': 'supporterCreateProfile',
    'supporter': 'supporterProfileList',
    'supporter/:id': 'supporterProfile'
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
  patientFamilyCreateProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(RecipientCreateProfile, {router: self}),
      document.getElementById('app')
    );
  },
  patientFamilyProfileList: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(RecipientProfileList, {router: self}),
      document.getElementById('app')
    );
  },
  patientFamilyProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(RecipientProfile, {router: self}),
      document.getElementById('app')
    );
  },

  supporterCreateProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterCreateProfile, {router: self}),
      document.getElementById('app')
    );
  },
  supporterProfileList: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterProfileList, {router: self}),
      document.getElementById('app')
    );
  },
  supporterProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterProfile, {router: self}),
      document.getElementById('app')
    );
  }
});

// instantiation of the router
var router = new Router();

// exporting of router so it can be required into index.js
module.exports = router;
