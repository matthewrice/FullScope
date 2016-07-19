var React = require('react');
var $ = require('jquery');

var User = require('../models/user');
var AccountHeader = require('./account-header.jsx');



var Signup = React.createClass({
  handleSignup: function(e){
    e.preventDefault();

    var name = $('#user-name').val();
    var email = $('#user-email').val();
    var password = $('#user-password').val();

    var route = this.props.router;

    var newUser = new User();
    newUser.set({'name': name, 'email': email, 'password': password});
    console.log('A new user signed up!: ', newUser);

    newUser.save().done(function(){
      router.navigate('dashboard', {trigger: true});
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
                <input name="name" id="user-name" className="user-name" type="text" placeholder="Full Name" /><br/>
                <input name="email" id="user-email" className="user-email" type="email" placeholder="Email" /><br/>
                <input name="password" id="user-password" className="user-password" type="password" placeholder="Password" /><br/>
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
