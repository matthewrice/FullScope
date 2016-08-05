var React = require('react');

var PatientFamily = require('../models/patient-family-model').PatientFamily;
var AppHeader = require('./app-header.jsx');
var EditProfileButton = require('./detail-edit-button.jsx').EditProfileButton;

/*
 * This component renders a single Patient Family's profile.
 */
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

    {/*
      * selectedNeeds is an array within an object.  I had "get" them from the
      * state of my PatientFamily model and map over them to list them in this
      * view.
      */}
    var currentNeeds = needs.map(function(selectedNeed, index){
      return (
        <li className="patientFamilyProfile-needs" key={index}>
          {selectedNeed}
        </li>
      );
    });

    var divStyle = profile.get('profileImage') ? {
        backgroundImage: 'url("' + profile.get('profileImage') + '")'
    } : {};

    return (
      <div className="row">
        <AppHeader />

        <div key={profile.get('objectId')} className="col-md-offset-3 col-md-6 col-xs-offset-1 col-xs-10">
          <div className="patientFamilyCard">
            <div className="row">
              <div className="patientFamilyImage" style={divStyle}>
                <h3 className="col-md-12 singleview-patientFamilyName">{profile.get('familyName')}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 patientFamily-contact-info">
                <div className="detail row">
                  <div className="col-xl-offset-1 col-xl-3 col-sm-4 col-xs-5">Home Town:</div>
                  <div className="col-lg-7 col-sm-8 col-xs-7">{profile.get('city')}, {profile.get('state')}</div>
                </div>
                <div className="detail row">
                  <div className="col-xl-offset-1 col-xl-3 col-sm-4 col-xs-5">Contact Name:</div>
                  <div className="col-lg-7 col-sm-8 col-xs-7">{profile.get('contactName')}</div>
                </div>
                <div className="detail row">
                  <div className="col-xl-offset-1 col-xl-3 col-sm-4 col-xs-5">Patient Name:</div>
                  <div className="col-lg-7 col-sm-8 col-xs-7">{profile.get('patientName')}</div>
                </div>
                <div className="detail row">
                  <div className="col-xl-offset-1 col-xl-3 col-sm-4 col-xs-5">Hospital Name:</div>
                  <div className="col-lg-7 col-sm-8 col-xs-7">{profile.get('hospitalName')}</div>
                </div>
                <div className="detail row">
                  <div className="col-xl-offset-1 col-xl-3 col-sm-4 col-xs-5">Cancer Type:</div>
                  <div className="col-lg-7 col-sm-8 col-xs-7">{profile.get('cancerType')}</div>
                </div>
                <div className="detail row">
                  <div className="col-xl-offset-1 col-xl-3 col-sm-4 col-xs-5">Website:</div>
                  <div className="col-lg-7 col-sm-8 col-xs-7"><a href={profile.get('website')}>Follow our story</a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row patientFamilyStory-container">
            <div className="col-md-12">
              <h3 className="patientFamilyStory">Our Story</h3>
              <div className="family-story col-xs-offset-1 col-xs-10">{profile.get('story')}</div>
            </div>
          </div>

          <div className="row patientFamilyNeeds-container">
            <div className="col-md-12">
              <h3 className="patientFamilyNeeds">Our current needs </h3>
              <ul className="patientFamilyProfile-needsList col-xs-offset-1 col-xs-10">{currentNeeds}</ul>
            </div>
          </div>

        {/*
          * The edit profile button can only be seen by the owner of the
          * profile account.
          * It routes the user to the PatientFamilyCreateEditProfile view.
          */}
          <div className="row">
            <div className="col-md-offset-4 col-md-4 col-xs-offset-2 col-xs-8 patientFamily-editProfileButton-container">
              <EditProfileButton profileId={this.props.profileId} href="#patientfamilyeditprofile"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});



module.exports = PatientFamilyProfile;
