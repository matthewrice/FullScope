var React = require('react');

var AppHeader = require('./app-header.jsx');


// top level dashboard.jsx component
var Dashboard = React.createClass({

  render: function(){

    return(
      <div>
        <AppHeader />

        <div className="row">
          <div className="identity">Who We Are</div>
          <div className="methods">Ways To Support</div>
          <div className="families">Families We Support</div>
        </div>

      </div>
    );
  }
});


module.exports = Dashboard;
