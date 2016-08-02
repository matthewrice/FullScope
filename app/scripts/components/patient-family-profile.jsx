var React = require('react');

var PatientFamily = require('../models/patient-family-model').PatientFamily;
var AppHeader = require('./app-header.jsx');
var EditProfileButton = require('./detail-edit-button.jsx').EditProfileButton;

var PatientFamilyProfile = React.createClass({

  getInitialState: function(){
    return {
      profile: new PatientFamily()
    }
  },
  componentWillMount: function(){
    var self = this;
    var profile = this.state.profile;

    if(this.props.profileId){
      profile.set('objectId', this.props.profileId);
      profile.fetch().done(function(){
        self.setState({
          profile: profile
        });
      });
    }
  },
  render: function(){
    var profile = this.state.profile;
    var needs = profile.get('selectedNeeds');

    var currentNeeds = needs.map(function(selectedNeed, index){
      return (
        <li key={index}>
          {selectedNeed}
        </li>
      );
    });

    return (
      <div className="row">
        <AppHeader />

        <div key={profile.get('objectId')} className="col-xs-offset-3 col-xs-6">
          <div className="">
            <div className="recipient-card">
              <div className="profile-pic col-md-4">
                <img src="images/chloe.jpg" />
              </div>
              <div className="col-md-8 patientFamily-contact-info">
                <div className="row">
                  <h3 className="col-xs-12 familyName-detail">
                    {profile.get('familyName')}
                  </h3>
                </div>
                <div className="row">
                  <div className="detail">
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
                    <div className="col-xs-8 contact-details">{profile.get('website')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recipient-story">
              <div className="family-story">{profile.get('story')}</div>
            </div>
            <div className="recipient-needs">
              <h3 className="patient-family-needs">Our current needs </h3>
              <ul>{currentNeeds}</ul>
            </div>

            <EditProfileButton profileId={this.props.profileId} href="#patientfamilyeditprofile"/>
          </div>
        </div>
      </div>
    );
  }
});



module.exports = PatientFamilyProfile;
