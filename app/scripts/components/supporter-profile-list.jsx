var React = require('react');

var SupporterProfileCollection = require('../models/supporter-profile-model').SupporterProfileCollection;
var AppHeader = require('./app-header.jsx');

/*
 * This component renders a list of all the Supporters. Just like the
 * PatientFamilyList, you can click on a supporter to see their profile by itself.
 */
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
    console.log('A User has viewed the following profile: ', profile.get('objectId'));
  },
  render: function(){
    var profileList = this.state.profileList;
    var self = this;
    console.log('profileList: ', profileList);

    var supporter = profileList.map(function(profile){
      return (
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')} className="thumbnail supporter-profile-card col-md-4">
          <div className="supporter-pic">
            <img className="pic" src={profile.get('profileImage')} />
          </div>
          <div className="supporterContactDetails">
            <h3 className="col-md-12 supporterName-detail">{profile.get('supporterName')}</h3>
          </div>
        </li>
      );
    });

    return(
      <div>
        <AppHeader />

        <div className="row">
          <ul className="col-xs-offset-1 col-xs-10 supporter-list">{supporter}</ul>
        </div>
      </div>
    );
  }

});

module.exports = SupporterProfileList;
