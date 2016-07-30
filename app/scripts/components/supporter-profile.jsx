var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;
var AppHeader = require('./app-header.jsx');


var SupporterProfile = React.createClass({

  render: function(){

    return(
      <div>
        <AppHeader />
      </div>
    );
  }

});

module.exports = SupporterProfile;
