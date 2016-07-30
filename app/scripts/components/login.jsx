var React = require('react');
var $ = require('jquery');
var AppHeader = require('./app-header.jsx');
var User = require('../models/user');


// top level login.jsx component
var Login = React.createClass({
  handleLogin: function(e){
    e.preventDefault();
    var username = $('#user-email').val();
    var password = $('#user-password').val();

    var router = this.props.router;

    User.login(username, password, {
      success: function(user){
        console.log('User logged in: ', user);
        router.navigate('dashboard', {trigger: true});
      },
      error: function(user, error){
        alert("Either the email or password you enter doesn't match our records.  Please try again.");
        console.log('Check error message: ', error);
      }
    });
  },
  render: function(){

    return (
      <div>
        <AppHeader />

        <div className="row signup-background">
          <div className="col-xs-offset-4 col-xs-4">
            <div className="login">

              <form onSubmit={this.handleLogin} id="login">
                <div className="signup-title">Log In</div>
                <input name="username" id="user-email" className="username-is-email" type="email" placeholder="Email" /><br/>
                <input name="password" id="user-password" className="user-password user-login-submit" type="password" placeholder="Password" /><br/>
                <input type="submit" className="submit-login" value="Log In" /><br/>
              </form>

              <div className="optional-login">
                <span className="line"></span>
                <span className="or">Or</span>
                <span className="line"></span>
              </div>

              <button type="submit" className="login-via-facebook-button">
                <i className="fa fa-facebook facebook-icon" aria-hidden="true"></i>
                <span className="facebook-button-text">Log in with facebook</span>
              </button>

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
