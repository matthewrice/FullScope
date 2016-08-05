var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;
var AppHeader = require('./app-header.jsx');
var EditProfileButton = require('./detail-edit-button.jsx').EditProfileButton;


/*
 * This component renders a single Supporter's profile.
 */
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

    var divStyle = profile.get('profileImage') ? {
        backgroundImage: 'url("' + profile.get('profileImage') + '")'
    } : {};
    return(
      <div className="row">
        <AppHeader />

        <div className="singleview-supporterCard">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 supporterImage" style={divStyle}>
              <h3 className="col-md-12 singleview-supporterName">{profile.get('supporterName')}</h3>
            </div>
          </div>
          <div className="row">
            <div key={profile.get('objectId')} className="col-md-offset-3 col-md-6 supporter-singleview-profile">
              <div className="supporter-singleview-details">
                <div className="row">
                  <div className="
                    col-xl-offset-1 col-xl-3
                    col-sm-4
                    col-xs-3 supporterLabel">Contact Name: </div>
                  <div className="
                    col-lg-7
                    col-sm-8
                    col-xs-9 supporterCorrespondingDetails singleview-supporterContactName">{profile.get('contactName')}</div>
                </div>
                <div className="row">
                  <div className="
                    col-xl-offset-1 col-xl-3
                    col-sm-4
                    col-xs-3 supporterLabel">Supporter's Website: </div>
                  <a className="
                    col-lg-7
                    col-sm-8
                    col-xs-9 supporterCorrespondingDetails singleview-supporterWebsite" href={profile.get('website')}>Get to know us</a>
                </div>
                <div className="row">
                  <div className="
                    col-xl-offset-1 col-xl-3
                    col-sm-4
                    col-xs-3 supporterLabel">About the Supporter: </div>
                  <div className="
                    col-lg-7
                    col-sm-8
                    col-xs-9 supporterCorrespondingDetails singleview-supporterBlurb">{profile.get('blurb')}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-5 col-md-2 col-xs-offset-2 col-xs-8 supporter-editProfileButton-container">
              {/*
                * The edit profile button can only be seen by the owner of the
                * profile account.
                * It routes the user to the SupporterCreateEditProfile view.
                */}
              <EditProfileButton profileId={this.props.profileId} href="#supportereditprofile"/>
            </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = SupporterProfile;
