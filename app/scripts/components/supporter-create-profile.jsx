var React = require('react');


var SupporterCreateProfile = React.createClass({

  render: function(){

    return(
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <div className="supporter-form-container">

            <form onSubmit={this.handleCreateProfile} id="supporter-form">
              <div className="supporter-card-form">
                <div className="profile-pic col-md-4">
                  <img className="profile-image-upload-plus-icon" src="images/plainicon-plus-sign.svg" />
                  <img className="profile-image-upload-camera" src="images/plainicon-camera.svg" />
                </div>
                <div className="contact-details col-md-8">
                  <input name="supportername" id="supporter-name" className="supporter-name" type="text" placeholder="Name" /><br/>
                  <input name="supporterwebsite" id="supporter-website" className="supporter-website" type="url" placeholder="Website" /><br/>
                  <textarea name="userstory" id="blurb-input" className="blurb-input" placeholder="Tell us a little bit about you."/>
                  <input type="submit" className="supporter-create-button" value="Save Profile" />
              </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = SupporterCreateProfile;
