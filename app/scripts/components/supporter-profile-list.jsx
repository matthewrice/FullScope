var React = require('react');

var SupporterProfileCollection = require('../models/supporter-profile-model').SupporterProfileCollection;
var AppHeader = require('./app-header.jsx');


var SupporterProfileList = React.createClass({
  getInitialState: function(){
    return {
      profileList: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var profileList = new SupporterProfileCollection();

    profileList.fetch().done(function(){
      self.setState({profileList: profileList});
    });
  },
  handleClick: function(profile){
    var router = this.props.router;
    router.navigate('supporter/' + profile.get('objectId'), {trigger: true});
  },
  render: function(){
    var profileList = this.state.profileList;
    var self = this;
    console.log('profileList: ', profileList);

    var supporter = profileList.map(function(profile){
      return (
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')} className="col-md-offset-3 col-xs-6 supporter-profile-card">
          <div className="supporter-pic col-md-4">
            <img className="pic" src="images/chloe2.jpg" />
          </div>
          <div className="col-md-8 contact-details">
            <div className="row">
              <h3 className="col-md-12 supporterName-detail">
                {profile.get('supporterName')}
              </h3>
            </div>
            <div className="row">
              <div>
                <div className="col-md-4">Contact Name: </div>
                <div className="col-md-8 contact-details">{profile.get('contactName')}</div>
              </div>
              <div className="detail">
                <div className="col-md-4">Website: </div>
                <div className="col-md-8 contact-details supporter-url">
                  <a href={profile.get('website')}>{profile.get('website')}</a>
                </div>
              </div>
              <div className="detail">
                <div className="col-md-4">About Us: </div>
                <div className="col-md-8 contact-details">{profile.get('blurb')}</div>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return(
      <div>
        <AppHeader />

        <div className="row">
          <ul className="supporter-list">{supporter}</ul>
        </div>
      </div>
    );
  }

});

module.exports = SupporterProfileList;
