var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;
var AppHeader = require('./app-header.jsx');
var EditProfileButton = require('./detail-edit-button.jsx').EditProfileButton;

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

        <div className="col-md-12 supporter-singleview-profile-container">
          <div key={profile.get('objectId')} className="col-md-offset-2 col-md-8 supporter-singleview-profile">
            <div className="supporter-singleview-pic col-md-4">
              <img className="pic" src="images/chloe2.jpg" />
            </div>
            <div className="supporter-singleview-details col-md-8">
              <div className="row">
                <div className="col-md-4 hidden-sm singleview-label singleview-supporterName-label">Supporter: </div>
                <h3 className="col-md-8 col-sm-12 singleview-supporterName singleview-corresponding-label-info">{profile.get('supporterName')}</h3>
              </div>
              <div className="row">
                <div className="supporter-singleview-detail">
                  <div className="col-md-4 hidden-sm singleview-label">Contact Name: </div>
                  <div className="col-md-8 col-sm-12 singleview-corresponding-label-info">{profile.get('contactName')}</div>
                </div>
                <div className="supporter-singleview-detail">
                  <div className="col-md-4 hidden-sm singleview-label">Website: </div>
                  <div className="col-md-8 col-sm-12 singleview-corresponding-label-info singleview-url">
                    <a href={profile.get('website')}>{profile.get('website')}</a>
                  </div>
                </div>
                <div className="supporter-singleview-detail">
                  <div className="col-md-4 hidden-sm singleview-label">About Us: </div>
                  <div className="col-md-8 col-sm-12 singleview-corresponding-label-info">{profile.get('blurb')}</div>
                </div>
              </div>
            </div>
          </div>
#
          <EditProfileButton profileId={this.props.profileId} href="#supportereditprofile"/>

        </div>
      </div>
    );
  }

});

module.exports = SupporterProfile;
