var React = require('react');

var PatientFamilyCollection = require('../models/patient-family-model').PatientFamilyCollection;
var AppHeader = require('./app-header.jsx');

/*
 * This component renders all the patient families in the same view, but it doesn't
 * show all their info. To see more, you have to click on them.
 */
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
    console.log('The following Patient Family profile is being viewed: ', profile.get('objectId'));
  },
  render: function(){
    var profileList = this.state.profileList;
    var self = this;

    var patientFamily = profileList.map(function(profile){
      return (
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')} className="patientFamilyLi thumbnail col-md-3">
          <div className="patient-family-pic">
            <img className="pic" src={profile.get('profileImage')} />
          </div>
          <div className="patientFamilyList-contactInfo">
            <h3 className="col-md-12 familyName-detail">{profile.get('familyName')}</h3>
          </div>
        </li>
      );
    });

    return(
      <div>
        <AppHeader />

        <div className="row patientFamily-list-background">
          <ul className="patientFamilyList col-xs-offset-1 col-xs-10">{patientFamily}</ul>
        </div>
      </div>
    );
  }

});

module.exports = PatientFamilyList;
