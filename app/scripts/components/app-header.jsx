var React = require('react');
require('bootstrap-sass');

var User = require('../models/user');

/*
 * AppHeader is the header component.  It shares the app title with the User and
 * allows the User to navigate throughout the app.
 */
var AppHeader = React.createClass({

  handleLogOut: function(){
    localStorage.clear();
    console.log('The User logged out.');
  },
  render: function(){

    return (
      <div>
        <nav className="row app-header">
          <div className="nav nav-bar">
            <div className="col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-9 col-xs-offset-3 col-xs-6 fullscope">
              <a href="#homepage">FullScope</a>
            </div>
            <div className="col-md-1 col-sm-2 col-xs-3 account-links">
              <i className="fa fa-bars dropdown-toggle fontawesome-navbars" aria-hidden="true" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></i>
              <ul className="dropdown-menu">
                <li className="menu"><a href="#signup">Sign Up</a></li>
                <li className="menu"><a href="#login">Log In</a></li>
                <li onClick={this.handleLogOut} className="menu"><a href="#login">Log Out</a></li>
                <li className="menu"><a href="#supporter">Supporters</a></li>
                <li className="menu"><a href="#patientfamily">Patient Families</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});


module.exports = AppHeader;
