var React = require('react');

var PatientFamily = require('../models/patient-family-model').PatientFamily;
var AppHeader = require('./app-header.jsx');


var PatientFamilyProfile = React.createClass({

  render: function(){

    return(
      <div>
        <AppHeader />
      </div>
    );
  }

});

module.exports = PatientFamilyProfile;
