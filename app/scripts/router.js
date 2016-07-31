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
var SupportPatientFamily = require('./components/support-patient-family.jsx');
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
    'support': 'supportPatientFamily',
    'supportercreateprofile': 'supporterCreateProfile',
    'supporter': 'supporterProfileList',
    'supporter/:id': 'supporterProfile'
  },
  initialize: function(){
    User.restore();
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
  patientFamilyCreateProfile: function(profileId){
    var self=this;
    ReactDOM.render(
      React.createElement(PatientFamilyCreateProfile, {router: self, profileId: profileId}),
      document.getElementById('app')
    );
  },
  patientFamilyProfileList: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(PatientFamilyList, {router: self}),
      document.getElementById('app')
    );
  },
  patientFamilyProfile: function(profileId){
    var self=this;
    ReactDOM.render(
      React.createElement(PatientFamilyProfile, {router: self, profileId: profileId}),
      document.getElementById('app')
    );
  },
  supportPatientFamily: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupportPatientFamily, {router: self}),
      document.getElementById('app')
    );
  },
  supporterCreateProfile: function(profileId){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterCreateProfile, {router: self, profileId: profileId}),
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
  supporterProfile: function(profileId){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterProfile, {router: self, profileId: profileId}),
      document.getElementById('app')
    );
  }
});

// instantiation of the router
var router = new Router();

// exporting of router so it can be required into index.js
module.exports = router;
