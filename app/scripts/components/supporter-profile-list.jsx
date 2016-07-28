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
  render: function(){
    var profileList = this.state.profileList;
    console.log('profileList: ', profileList);

    var supporter = profileList.map(function(profile){
      console.log(profile.get('objectid '));
      return (
        <li key={profile.get('objectId')}>
          <a href="#supporter/:id">
            <div className="supporter-pic col-md-4">
              {/*}<img className="pic" src="{profile.get('profilePic')}" />*/}
            </div>
            <div className="contact-details col-md-8">
              <div>{profile.get('companyName')}</div>
              <div>{profile.get('familyName')}</div>
              <div>{profile.get('contactName')}</div>
              <div>{profile.get('website')}</div>
              <div>{profile.get('blurb')}</div>
            </div>
          </a>
        </li>
      );
    });

    return(
      <div>
        <AppHeader />

        <div className="row">
          <ul className="col-xs-offset-3 col-xs-6">{supporter}</ul>
        </div>
      </div>
    );
  }

});

module.exports = SupporterProfileList;
