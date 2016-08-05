var React = require('react');
var User = require('../models/user');

/*
 * The edit profile button has it's own component in order to stay d.r.y.
 * It is being used in supporter-profile.jsx and patient-family-profile.jsx
 */
var EditProfileButton = React.createClass({
  render: function(){
    var currentUser = User.currentUser();

    if(currentUser.get('profile') && currentUser.get('profile').objectId === this.props.profileId){
      return <a href={this.props.href}><button className="editProfileButton">Edit Profile</button></a>
      console.log('User has clicked the edit button.');
    }

    return <div />
  }
});

module.exports = {
  'EditProfileButton': EditProfileButton
}
