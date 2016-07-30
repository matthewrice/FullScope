var React = require('react');

var PatientFamilyCollection = require('../models/patient-family-model').PatientFamilyCollection;
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
  handleClick: function(profile){
    var router = this.props.router;
    router.navigate('patientfamily/' + profile.get('objectId'), {trigger: true});
  },
  render: function(){
    var profileList = this.state.profileList;
    console.log('Patient Family List: ', profileList);
    var self = this;

    var patientFamily = profileList.map(function(profile){
      console.log('patient family', profile);
      return (
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')} className="col-xs-offset-3 col-xs-6 patientfamily-profile-card">
          <div className="patient-family-pic col-md-4">
            <img className="pic" src="images/chloe.jpg" />
          </div>
          <div className="col-md-8 patientFamily-contact-info">
            <div className="row">
              <h3 className="col-xs-12 familyName-detail">
                {profile.get('familyName')}
              </h3>
            </div>
            <div className="row">
              <div>
                <div className="col-xs-4">Home Town:</div>
                <div className="col-xs-8 contact-details">{profile.get('city')}, {profile.get('state')}</div>
              </div>
              <div className="detail">
                <div className="col-xs-4">Contact Name:</div>
                <div className="col-xs-8 contact-details">{profile.get('contactName')}</div>
              </div>
              <div className="detail">
                <div className="col-xs-4">Patient Name:</div>
                <div className="col-xs-8 contact-details">{profile.get('patientName')}</div>
              </div>
              <div className="detail">
                <div className="col-xs-4">Hospital Name:</div>
                <div className="col-xs-8 contact-details">{profile.get('hospitalName')}</div>
              </div>
              <div className="detail">
                <div className="col-xs-4">Cancer Type:</div>
                <div className="col-xs-8 contact-details">{profile.get('cancerType')}</div>
              </div>
              <div className="detail">
                <div className="col-xs-4">Website:</div>
                <div className="col-xs-8 contact-details patientFamily-url">
                  <a href={profile.get('website')}>Follow our journey</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return(
      <div>
        <AppHeader />

        <div className="row patientFamily-list-background">
          <ul className="patient-family-list">{patientFamily}</ul>
        </div>
      </div>
    );
  }

});

module.exports = PatientFamilyList;
