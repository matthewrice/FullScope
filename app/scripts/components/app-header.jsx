var React = require('react');
require('bootstrap-sass');


var AppHeader = React.createClass({

  toggleRightNavBar: function(){
    $(document).ready(function() {
      $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleclassName('active');
        $('.showhide').toggle();
      });
    });
  },
  render: function(){

    return (
      <div>
        <nav className="row app-header">
          <div className="nav nav-bar">
            <div className="col-xs-2 patientfamily-link">
              <a href="#patientfamily">
                <img className="family-icon" src="images/patient-family-link-icon.svg" />
              </a>
            </div>
            <div className="col-xs-9 fullscope">
              <a href="#dashboard">FullScope</a>
            </div>
            <div className="col-xs-1 account-links">
              <i className="fa fa-bars dropdown-toggle fontawesome-navbars" aria-hidden="true" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></i>
              <ul className="dropdown-menu">
                <li><a href="#signup">Sign Up</a></li>
                <li><a href="#login">Log In</a></li>
                <li><a href="#supporter">Supporters</a></li>
                <li><a href="#patientfamily">Patient Families</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});


module.exports = AppHeader;
