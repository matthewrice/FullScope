var React = require('react');
var AccountHeader = require('./account-header.jsx');


// top level login.jsx component
var Login = React.createClass({

  render: function(){

    return (
      <div>
        <AccountHeader />

        <div className="row">
          <div className="col-xs-offset-4 col-xs-4">
            <div className="signup">
              <form onSubmit={this.handleNewUser} id="login">
                <div className="signup-title">Log In</div>
                <input name="email" id="user-email" className="user-email" type="email" placeholder="Email" /><br/>
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
