var React = require('react');
var $ = require('jquery');
var AppHeader = require('./app-header.jsx');
var User = require('../models/user');


/*
 * Login handles the log in for my users.  It authenticates the User, keeps more
 * than 1 login session from occuring, and routes the User based on their "role".
 */
var Login = React.createClass({
  handleLogin: function(e){
    e.preventDefault();
    var username = $('#user-email').val();
    var password = $('#user-password').val();

    var router = this.props.router;

    {/*
      * the landingPage is a method in my router that routes the User to the
      * appropriate profile page based on their role (Patient Family or
      * Supporter).
      */}
    User.login(username, password, {
      success: function(user){
        router.landingPage(user);
      },
      error: function(user, error){
        alert("Either the email or password you enter doesn't match our records.  Please try again.");
        console.log('You got the following error when you tried to log in: ', error);
      }
    });
  },
  render: function(){

    return (
      <div>
        <AppHeader />

        <div className="row signup-background">
          <div className="col-md-offset-4 col-md-4">
            <div className="login">

              <form onSubmit={this.handleLogin} id="login">
                <div className="signup-title">Log In</div>
                <input name="username" id="user-email" className="username-is-email" type="email" placeholder="Email" /><br/>
                <input name="password" id="user-password" className="user-password user-login-submit" type="password" placeholder="Password" /><br/>
                <input type="submit" className="submit-login" value="Log In" /><br/>
              </form>

              <div className="signup-instead">
                <span>New to FullScope? <a href="#signup">Sign Up</a></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Login;
