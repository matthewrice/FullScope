var React = require('react');

var PatientFamilyCollection = require('../models/patient-family-model').PatientFamilyCollection;
var AppHeader = require('./app-header.jsx');


// top level dashboard.jsx component
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
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')} className="col-md-3 mini-profile-cards">
          <img src="images/chloe.jpg" />
          <div className="miniFamilyName">{profile.get('familyName')}</div>
        </li>
      );
    });

    return(
      <div className="">
        <AppHeader />

        <div className="row dashboard-background">
          <div className="">
            <div className="purpose col-md-12">
              <h3 className="purpose-title">Why We Exist</h3>
              <p className="why-we-exist col-md-offset-2 col-md-8">Cancer is a burden that no family
                should have to bear on their own. Full Scope exists to meet the needs of the whole family,
                whether it be emotional, financial, spiritual, or basic everyday tasks. We are a community
                of people who understand the impact cancer has on the entire family. Our goal is to provide
                a safe place where patient families can share their story and have their
                <span className="emphasis"> full scope </span>of needs cared for.</p>
            </div>
            <div className="ways-to-get-involved col-md-12">
              <div className="row">
                <h3 className="ideas-title">Ways To Support A Family Facing Cancer.</h3>
              </div>
              <div className="row">
                <div className="col-md-offset-5 col-md-2">
                  <div className="ideas">- Invest your time</div>
                  <div className="ideas">- Donate your services</div>
                  <div className="ideas">- Offer spiritual support</div>
                  <div className="ideas financial-burden">- Relieve a financial burden</div>
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
