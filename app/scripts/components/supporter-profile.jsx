var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;
var AppHeader = require('./app-header.jsx');


var SupporterProfile = React.createClass({
  getInitialState: function(){
    return {
      profile: new SupporterProfileModel()
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

    return(
      <div className="row">
        <AppHeader />

        <div key={profile.get('objectId')} className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-10 supporter-profile-card supporter-profile">
          <div className="supporter-pic col-md-4">
            <img className="pic" src="images/chloe2.jpg" />
          </div>
          <div className="contact-details col-md-8">
            <div className="row supporter-title-and-name">
              <div className="col-md-4 hidden-sm hidden-xs supporter-detail">Supporter: </div>
              <h3 className="col-md-8 col-sm-12 supporterName-detail">{profile.get('supporterName')}</h3>
            </div>
            <div className="row supporter-remaining-details">
              <div>
                <div className="col-md-4 hidden-sm">Contact Name: </div>
                <div className="col-md-8 col-sm-12 contact-details">{profile.get('contactName')}</div>
              </div>
              <div className="detail">
                <div className="col-md-4 hidden-sm">Website: </div>
                <div className="col-md-8 col-sm-12 contact-details supporter-url">
                  <a href={profile.get('website')}>{profile.get('website')}</a>
                </div>
              </div>
              <div className="detail">
                <div className="col-md-4 hidden-sm">About Us: </div>
                <div className="col-md-8 col-sm-12 contact-details">{profile.get('blurb')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SupporterProfile;
