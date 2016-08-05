var React = require('react');

var PatientFamilyCollection = require('../models/patient-family-model').PatientFamilyCollection;
var AppHeader = require('./app-header.jsx');


/*
 * HomePage shares with the User what the app is all about.
 */
var HomePage = React.createClass({
  getInitialState: function(){
    return {
      familyThumbnail: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var familyThumbnail = new PatientFamilyCollection();

    familyThumbnail.fetch().done(function(){
      self.setState({familyThumbnail: familyThumbnail});
    });
  },
  handleClick: function(profile){
    var router = this.props.router;
    router.navigate('patientfamily/' + profile.get('objectId'), {trigger: true});
  },
  render: function(){
    var familyThumbnail = this.state.familyThumbnail;
    var self=this;

    var patientFamily = familyThumbnail.map(function(profile){
      return (
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')} className="col-md-3 thumbnail mini-profile-cards">
          <img src={profile.get('profileImage')} />
          <div className="miniFamilyName">{profile.get('familyName')}</div>
        </li>
      );
    });

    return(
      <div className="">
        <AppHeader />

        <div className="row">
          <div className="">
            <div className="purpose-statement-background col-md-12">
              <span className="intro-Statement">Cancer is a burden that no family should have to bear on their own.</span>
            </div>
            <div className="ways-to-get-involved col-md-12">
              <div>
                <div className="row">
                  <h3 className="ideas-title">Ways To Support A Family Facing Cancer</h3>
                </div>
                <div className="row">
                  <div className="col-md-offset-4 col-md-4 ideas">
                    <div>Relieve a financial burden</div>
                    <div>Donate your services</div>
                    <div>Invest your time</div>
                    <div>Offer spiritual support</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="families col-md-12">
              <div className="row">
                <h3 className="families-title">Families We Support</h3>
              </div>
              <div className="row">
                <div className="col-md-offset-2 col-md-8 mini-profile-card-list-container">
                  <ul className="mini-profile-card-list">{patientFamily}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});


module.exports = HomePage;
