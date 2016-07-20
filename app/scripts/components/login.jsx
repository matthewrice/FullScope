var React = require('react');
var $ = require('jquery');
var AccountHeader = require('./app-header.jsx');
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
        <AccountHeader />

        <div className="row">
          <div className="col-xs-offset-4 col-xs-4">
            <div className="signup">
              <form onSubmit={this.handleLogin} id="login">
                <div className="signup-title">Log In</div>
                <input name="username" id="user-email" className="user-email" type="email" placeholder="Email" /><br/>
                <input name="password" id="user-password" className="user-password" type="password" placeholder="Password" /><br/>
                <input type="submit" className="submit-signup" value="Log In" /><br/>
                <div className="optional-login">or</div>
                <button type="submit" className="login-via-facebook-button">
                  <i className="fa fa-facebook facebook-icon" aria-hidden="true"></i>
                  <span className="facebook-button-text">Log in with facebook</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Login;
