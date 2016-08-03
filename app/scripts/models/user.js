var _ = require('underscore');
var Backbone = require('backbone');
// var $ = window.jQuery = require('jquery');


var User = Backbone.Model.extend({
  urlRoot: 'https://mrice.herokuapp.com/users',
  toJSON: function(){
    var data = _.clone(this.attributes);

    delete data.profile;

    return data;
  }
},{
  signup: function(username, password, firstName, lastName, role, callbacks){
    var signedUpUser = new User();
    signedUpUser.set({'username': username, 'password': password, 'firstName': firstName, 'lastName': lastName, 'role': role});

    signedUpUser.save().done(function(data){
      localStorage.setItem('user', JSON.stringify(signedUpUser.toJSON()));

      callbacks.success(signedUpUser);
    }).fail(function(error){});
  },
  login: function(username, password, callbacks, firstName, lastName, role){
    var loggedInUser = new User();
    var queryString = jQuery.param({'username': username, 'password': password, 'firstName': firstName, 'lastName': lastName, 'role': role});

    loggedInUser.urlRoot = 'https://mrice.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));

      callbacks.success(loggedInUser);
    }).fail(function(error){});
  },
  authenticate: function(sessionToken){
    jQuery.ajaxSetup({
       beforeSend: function(xhr){
         xhr.setRequestHeader("X-Parse-Application-Id", "tiyfrontendclass");
         xhr.setRequestHeader("X-Parse-REST-API-Key", "demodayiscoming");
         if(sessionToken){
           xhr.setRequestHeader("X-Parse-Session-Token", sessionToken);
         }
       }
     });
  },
  restore: function(){
    var user = this.currentUser();
    if(user.get('objectId')) {
      this.authenticate(user.get('sessionToken'));
    }else{
      this.authenticate();
    }
    return user;
  },
  currentUser: function(){
    var user = new User(JSON.parse(localStorage.getItem('user')));
    user.set('profile', JSON.parse(localStorage.getItem('patientFamily') || localStorage.getItem('supporter')));
    return user;
  },
  // invalidate: function(){
  //   localStorage.removeItem('sessionToken');
  //   this.trigger('invalidationSucceeded');
  //   window.location.reload();
  // },
  isAuthenticated: function(){
    return !!localStorage.getItem('user');
  }
});

module.exports = User;
