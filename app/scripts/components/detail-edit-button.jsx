var React = require('react');
var User = require('../models/user');


var EditProfileButton = React.createClass({
  render: function(){
    var currentUser = User.currentUser();

    console.log(currentUser);

    if(currentUser.get('profile') && currentUser.get('profile').objectId === this.props.profileId){
      return <a href={this.props.href}><button>Edit Profile</button></a>  
    }

    return <div />
  }
});

module.exports = {
  'EditProfileButton': EditProfileButton
}
