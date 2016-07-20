var Backbone = require('backbone');


var User = Backbone.Model.extend({
  urlRoot: 'https://mrice.herokuapp.com/classes/_User'
},{
  login: function(username, password, firstName, lastName, callbacks){
    var loggedInUser = new User();
    var queryString = jQuery.param({'username': username, 'password': password, 'firstName': firstName, 'lastName': lastName});

    loggedInUser.urlRoot = 'https://mrice.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      console.log(data);
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));
      callbacks.success(loggedInUser);

    }).fail(function(error){
      callbacks.error(loggedInUser, error);
    });
  }
});

module.exports = User;
