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
            <div className="col-xs-offset-1 col-xs-10 fullscope">
              <a href="#dashboard">FullScope</a>
            </div>
            <div className="col-xs-1 account-links">
              <i className="fa fa-bars dropdown-toggle fontawesome-navbars" aria-hidden="true" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></i>
              <ul className="dropdown-menu">
                <li className="menu"><a href="#signup">Sign Up</a></li>
                <li className="menu"><a href="#login">Log In</a></li>
                <li className="menu"><a href="#login">Log Out</a></li>
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
