var React = require('react');
var $ = require('jquery');

var User = require('../models/user');
var AccountHeader = require('./app-header.jsx');



var Signup = React.createClass({
  handleSignup: function(e){
    e.preventDefault();

    var username = $('#username-is-email').val();
    var password = $('#user-password').val();
    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();


    var router = this.props.router;

    var newUser = new User();
    newUser.set({'username': username, 'password': password, 'firstName': firstName, 'lastName': lastName});
    console.log('A new user signed up!: ', newUser);

    newUser.save().done(function(){
      router.navigate('dashboard', {trigger: true});
    })
    .error(function(error){
      alert("That user already exists.  Please create a new user.");
      console.log('Check error message: ', error);
    });
  },
  render: function(){

    return(
      <div>
        <AccountHeader />

        <div className="row">
          <div className="col-xs-offset-4 col-xs-4">
            <div className="signup">
              <form onSubmit={this.handleSignup} id="signup">
                <div className="signup-title">Sign up</div>
                <input name="firstname" id="firstname" className="firstname" type="text" require="true" placeholder="First Name" /><br/>
                <input name="lastname" id="lastname" className="lastname" type="text" require="true" placeholder="Last Name" /><br/>
                <input name="username" id="username-is-email" className="username-is-email" type="email" require="true" placeholder="Email" /><br/>
                <input name="password" id="user-password" className="user-password" type="password" require="true" placeholder="Password" /><br/>
                <input type="submit" className="submit-signup" value="Sign up" /><br/>
                <div className="user-choices">
                  <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <span>Patient Family</span>
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <span>Booster</span>
                  </label>
                </div>
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


module.exports = Signup;
