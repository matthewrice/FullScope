var React = require('react');

var PatientFamilyCollection = require('../models/patientfamily-model').PatientFamilyCollection;
var AppHeader = require('./app-header.jsx');


var PatientFamilyList = React.createClass({
  getInitialState: function(){
    return {
      profileList: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var profileList = new PatientFamilyCollection();

    profileList.fetch().done(function(){
      self.setState({profileList: profileList});
    });
  },
  render: function(){
    var profileList = this.state.profileList;
    console.log('profileList: ', profileList);

    var patientFamily = profileList.map(function(profile){
      console.log(profile.get('objectid '));
      return (
        <li key={profile.get('objectId')}>
          <a href="#patientfamily/:id">
            <div className="patient-family-pic col-md-4">
              {/*}<img className="pic" src="{profile.get('profilePic')}" />*/}
            </div>
            <div className="contact-details col-md-8">
              <div>{profile.get('familyName')}</div>
              <div>{profile.get('contactName')}</div>
              <div>{profile.get('patientName')}</div>
              <div>{profile.get('hospitalName')}</div>
              <div>{profile.get('cancerType')}</div>
              <div>{profile.get('city')}, {profile.get('state')}</div>
              <div>{profile.get('website')}</div>
            </div>
          </a>
        </li>
      );
    });

    return(
      <div>
        <AppHeader />

        <div className="row">
          <ul className="col-xs-offset-3 col-xs-6">{patientFamily}</ul>
        </div>
      </div>
    );
  }

});

module.exports = PatientFamilyList;
