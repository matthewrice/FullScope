var React = require('react');


var AccountHeader = React.createClass({

  render: function(){

    return (
      <div>
        <nav className="row account-header">
          <div className="col-xs-offset-5 col-xs-2">
            <a href="#dashboard">FullScope</a>
          </div>
          <div className="col-xs-offset-2 col-xs-2">
            <span className="">
              <a href="#login">Log In</a>
            </span>
            <span className="">
              <a href="#signup">Sign Up</a>
            </span>
          </div>
        </nav>
      </div>
    );
  }
});


module.exports = AccountHeader;
