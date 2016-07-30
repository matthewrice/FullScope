var React = require('react');


var AppHeader = React.createClass({

  render: function(){

    return (
      <div>
        <nav className="row app-header">
          <div className="col-xs-2 patientfamily-link">
            <a href="#patientfamily">
              <img className="family-icon" src="images/patient-family-link-icon.svg" />
            </a>
          </div>
          <div className="col-xs-offset-3 col-xs-2 fullscope">
            <a href="#dashboard">FullScope</a>
          </div>
          <div className="col-xs-offset-3 col-xs-2 account-links">
            <span className="account-header-link">
              <a href="#">
                <img className="user-account" src="images/profile-icon.svg" />
              </a>
            </span>
            <span className="login-header-link">
              <a href="#login">
                <i className="user-icon-header fa fa-user" aria-hidden="true"></i>
              </a>
            </span>
            <span className="signup-header-link">
              <a href="#signup">
                <img className="signup-icon" src="images/signup-icon.svg" />
              </a>
              </span>
          </div>
        </nav>
      </div>
    );
  }
});


module.exports = AppHeader;
