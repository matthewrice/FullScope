var React = require('react');
var $ = require('jquery');

var User = require('../models/user');
var AppHeader = require('./app-header.jsx');


/*
 * This component allows a new User to sign up and routes them to the appropriate
 * create profile form based on their role (Patient Family or Profile).
 */
var Signup = React.createClass({
  getInitialState: function(){
    return {
      role: 'supporter'
    };
  },
  handleChange: function(e){
    this.setState({role: e.target.value});
  },
  handleSignup: function(e){
    e.preventDefault();

    var username = $('#username-is-email').val();
    var password = $('#user-password').val();
    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();
    var role = this.state.role;

    var router = this.props.router;

    User.signup(username, password, firstName, lastName, role, {
      success: function(){
        if(role === 'supporter'){
          console.log('A Supporter signed up!');
          router.navigate('supporterprofile', {trigger: true});
        }else{
          console.log('A Patient Family signed up!');
          router.navigate('patientfamilyprofile', {trigger: true});
        }
      },
      error: function(){
        alert("Check your console.");
        console.log('The following error occured: ', error);
      }
    });
  },
  render: function(){
    return (
      <div>
        <AppHeader />

        <div className="row signup-background">
          <div className="col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
            <div className="signup">

              <form onSubmit={this.handleSignup} id="signup" className="signup-form">
                <div className="signup-title">Sign up</div>
                <input name="firstname" id="firstname" className="firstname" type="text" require="true" placeholder="First Name" /><br/>
                <input name="lastname" id="lastname" className="lastname" type="text" require="true" placeholder="Last Name" /><br/>
                <input name="username" id="username-is-email" className="username-is-email" type="email" require="true" placeholder="Email" /><br/>
                <input name="password" id="user-password" className="user-password" type="password" require="true" placeholder="Password" /><br/>
                <div className="user-choices input-group">

                  <label className="radio-inline" htmlFor="role1">
                    <input onChange={this.handleChange} checked={this.state.role === 'recipient'} type="radio" name="role" id="role1" value="recipient"/>
                    <span className="patientFamily-radio-signup">Patient Family</span>
                  </label>

                  <label className="radio-inline supporter-radio-button" htmlFor="role2">
                    <input onChange={this.handleChange} checked={this.state.role === 'supporter'} type="radio" name="role" id="role2" value="supporter"/>
                    <span>Supporter</span>
                  </label>
                </div>
                <input type="submit" className="submit-signup" value="Sign up" /><br/>
              </form>

              <div className="login-instead">
                <span className="existing-user">Have an account? <a href="#login">Log In</a></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Signup;
