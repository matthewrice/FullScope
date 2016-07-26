var Backbone = require('backbone');
// var $ = window.jQuery = require('jquery');


var User = Backbone.Model.extend({
  urlRoot: 'https://mrice.herokuapp.com/users'
},{
  login: function(username, password, callbacks, firstName, lastName, role){
    var loggedInUser = new User();
    var queryString = jQuery.param({'username': username, 'password': password, 'firstName': firstName, 'lastName': lastName, 'role': role});

    loggedInUser.urlRoot = 'https://mrice.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      // var self=this;
      console.log(data);
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));
      jQuery.ajaxSetup({
         beforeSend: function(xhr){
           xhr.setRequestHeader("X-Parse-Application-Id", "tiyfrontendclass");
           xhr.setRequestHeader("X-Parse-REST-API-Key", "demodayiscoming");
           xhr.setRequestHeader("X-Parse-Session-Token", data.sessionToken);
         }
       });
      callbacks.success(loggedInUser);

    }).fail(function(error){
      callbacks.error(loggedInUser, error);
    });
  }
},{
  restore: function(){
    var token = localStorage.getItem('sessionToken');
    if(token) {
      this.login({sessionToken: token});
    }
  },
  invalidate: function(){
    localStorage.removeItem('sessionToken');
    this.trigger('invalidationSucceeded');
    window.location.reload();
  },
  isAuthenticated: function(){
    return !!this.get('loggedInUser');
  }
});

module.exports = User;
