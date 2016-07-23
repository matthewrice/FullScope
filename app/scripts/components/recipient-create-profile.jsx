var React = require('react');
var trumbowyg = require('trumbowyg');
console.log(trumbowyg);


var RecipientCreateProfile = React.createClass({
  // getInitialState: function(){
  //
  // },
  // componentWillMount: function(){
  //
  // },
  componentDidMount: function(){
    jQuery.trumbowyg.svgPath = 'fonts/icons.svg';
    jQuery('#story-input').trumbowyg();

  },
  // handleCreateProfile: function(){
  //
  // },
  // handleUpdateProfile: function(){
  //
  // },
  // handleDeleteProfile: function(){
  //
  // },
  render: function(){

    return(
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <div className="recipient-form-container">

            <form onSubmit={this.handleCreateProfile} id="recipient-form">
              <div className="recipient-card-form">
                <div className="profile-pic col-md-4">
                  <img className="profile-image-upload-plus-icon" src="images/plainicon-plus-sign.svg" />
                  <img className="profile-image-upload-camera" src="images/plainicon-camera.svg" />
                </div>
                <div className="contact-details col-md-offset-1 col-md-7">
                  <input name="recipientfamilyname" id="recipient-family-name" className="recipient-family-name" type="text" placeholder="Your Family Name" /><br/>
                  <input name="recipientcontactname" id="recipient-contact-name" className="recipient-contact-name" type="text" placeholder="Contact Name" /><br/>
                  <div>
                    <input name="recipientcity" id="recipient-city" className="recipient-city" type="text" placeholder="City" /><br/>
                    <input name="recipientstate" id="recipient-state" className="recipient-state" type="text" placeholder="State" /><br/>
                  </div>
                  <input name="recipientwebsite" id="recipient-website" className="recipient-website" type="url" placeholder="Website" /><br/>
                </div>
              </div>
              <div className="recipient-story-form">
                <textarea name="userstory" id="story-input" className="story-input" placeholder="Tell us your story"/>
              </div>
              <div className="recipient-needs-form">
                <span>Needs: </span>
              </div>
              <input type="submit" className="recipient-create-button" value="Save Profile" />
            </form>

          </div>
        </div>
      </div>
    );
  }
});


module.exports = RecipientCreateProfile;
