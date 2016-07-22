var React = require('react');


var AppHeader = React.createClass({

  render: function(){

    return (
      <div>
        <nav className="row app-header">
          <div className="col-xs-1 recipients-header-link">
            <a href="#dashboard">Recipients</a>
          </div>
          <div className="col-xs-offset-4 col-xs-2 fullscope">
            <a href="#dashboard">FullScope</a>
          </div>
          <div className="col-xs-offset-3 col-xs-2 account-links">
            <span className="col-xs-6 login-header-link"><a href="#login">Log In</a></span>
            <span className="col-xs-6 signup-header-link"><a href="#signup">Sign Up</a></span>
          </div>
        </nav>
      </div>
    );
  }
});


module.exports = AppHeader;
