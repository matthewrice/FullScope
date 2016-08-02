// libraries and frameworks
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var User = require('./models/user');

// components being used in the router
var HomePage = require('./components/homepage.jsx');
var Signup = require('./components/signup.jsx');
var Login = require('./components/login.jsx');
var PatientFamilyCreateEditProfile = require('./components/patientFamily-createEdit-profile.jsx');
var PatientFamilyList = require('./components/patient-family-list.jsx');
var PatientFamilyProfile = require('./components/patient-family-profile.jsx');
var SupportPatientFamily = require('./components/support-patient-family.jsx');
var SupporterCreateEditProfile = require('./components/supporter-createEdit-profile.jsx');
var SupporterProfileList = require('./components/supporter-profile-list.jsx');
var SupporterProfile = require('./components/supporter-profile.jsx');
var PatientFamilyCollection = require('./models/patient-family-model').PatientFamilyCollection;
var SupporterProfileCollection = require('./models/supporter-profile-model').SupporterProfileCollection;

// patient/
// patient/:id
// patient/add
// patient/:id/edit


// router for entire app
var Router = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'homepage': 'homePage',
    'signup': 'signup',
    'login': 'login',
    'patientfamilyprofile': 'patientFamilyCreateProfile',
    'patientfamilyeditprofile': 'patientFamilyEditProfile',
    'patientfamily': 'patientFamilyProfileList',
    'patientfamily/:id': 'patientFamilyProfile',
    'support': 'supportPatientFamily',
    'supporterprofile': 'supporterCreateProfile',
    'supportereditprofile': 'supporterEditProfile',
    'supporter': 'supporterProfileList',
    'supporter/:id': 'supporterProfile'
  },
  initialize: function(){
    User.restore();
  },
  homePage: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(HomePage, {router: self}),
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

    if(User.isAuthenticated()){
      var user = User.restore();
      return self.landingPage(user);
    }

    ReactDOM.render(
      React.createElement(Login, {router: self}),
      document.getElementById('app')
    );
  },
  landingPage: function(user){
    var self = this;
    var patientFamilyCollection = new PatientFamilyCollection();
    var supporterCollection = new SupporterProfileCollection();

    if(user.get('role') === 'recipient'){
      patientFamilyCollection.query(user.get('objectId')).fetch().done(function(){
        var patientFamily = patientFamilyCollection.first();
        localStorage.setItem('patientFamily', JSON.stringify(patientFamily.toJSON()))
        self.navigate('patientfamily/' + patientFamily.get('objectId'), {trigger: true});
      });
    }else{
      supporterCollection.query(user.get('objectId')).fetch().done(function(){
        var supporter = supporterCollection.first();
        localStorage.setItem('supporter', JSON.stringify(supporter.toJSON()))
        self.navigate('supporter/' + supporter.get('objectId'), {trigger: true});
      });
    }
  },
  patientFamilyCreateProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(PatientFamilyCreateEditProfile, {router: self}),
      document.getElementById('app')
    );
  },
  patientFamilyEditProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(PatientFamilyCreateEditProfile, {router: self}),
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
  supporterCreateProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterCreateEditProfile, {router: self}),
      document.getElementById('app')
    );
  },
  supporterEditProfile: function(){
    var self=this;
    ReactDOM.render(
      React.createElement(SupporterCreateEditProfile, {router: self}),
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
