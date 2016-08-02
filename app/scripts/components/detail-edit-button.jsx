var React = require('react');
var User = require('../models/user');


var EditProfileButton = React.createClass({
  render: function(){
    var currentUser = User.currentUser();

    console.log(currentUser.get('profile').objectId);
    console.log(this.props.profileId);

    if(currentUser.get('profile').objectId != this.props.profileId){
      return <div />
    }

    return (
      <a href={this.props.href}><button>Edit Profile</button></a>
    )
  }
});

module.exports = {
  'EditProfileButton': EditProfileButton
}
