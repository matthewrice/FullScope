var Backbone = require('backbone');


var User = Backbone.Model.extend({
  urlRoot: 'https://mrice.herokuapp.com/User'
},{
  login: function(email, password, callbacks){
    var loggedInUser = new User();
    var queryString = jQuery.param({'email': email, 'password': password});

    loggedInUser.urlRoot = 'https://mrice.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));
      callbacks.success(loggedInUser);

    }).fail(function(error){
      callbacks.error(loggedInUser, error);
    });
  }
});

module.exports = User;
