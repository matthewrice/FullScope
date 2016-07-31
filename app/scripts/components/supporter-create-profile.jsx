var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;


var SupporterCreateProfile = React.createClass({
  getInitialState: function(){
    return {
      'supporterName': '',
      'contactName': '',
      'website': '',
      'blurb': ''
    }
  },
  addSupporterName: function(e){
    this.setState({'supporterName': e.target.value});
  },
  addSupporterContactName: function(e){
    this.setState({'contactName': e.target.value});
  },
  addSupporterWebsite: function(e){
    this.setState({'website': e.target.value});
  },
  addSupporterBlurb: function(e){
    this.setState({'blurb': e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();

    var supporterProfile = new SupporterProfileModel();
    var router = this.props.router;
    var supporter = JSON.parse(localStorage.getItem('user'));

    supporterProfile.set('supporterName', this.state.supporterName);
    supporterProfile.set('contactName', this.state.contactName);
    supporterProfile.set('website', this.state.website);
    supporterProfile.set('blurb', this.state.blurb);

    supporterProfile.setPointer('supporter', supporter, '_User');

    supporterProfile.save().done(function(){
      console.log('Supporter Profile: ', supporter);
      router.navigate('supporter/' + 'objectId', {trigger: true});
    });
  },
  render: function(){

    return(
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <div className="supporter-form-container">

            <form onSubmit={this.handleSubmit} id="supporter-form">
              <div className="supporter-card">
                <div className="profile-pic col-md-4">
                  <img className="profile-image-upload-plus-icon" src="images/plainicon-plus-sign.svg" />
                </div>
                <div className="contact-details col-md-8">
                  <input onChange={this.addSupporterName} name="supporterName" id="supporterName" className="supporter-name" type="text" placeholder="Supporter name" /><br/>
                  <input onChange={this.addSupporterContactName} name="supportername" id="contactName" className="contact-name" type="text" placeholder="Contact name if needed" /><br/>
                  <input onChange={this.addSupporterWebsite} name="supporterwebsite" id="website" className="supporter-website" type="url" placeholder="Website" /><br/>
                  <textarea onChange={this.addSupporterBlurb} name="blurb" id="blurb" className="blurb-input" placeholder="Tell us a little bit about you."/>
                </div>
                <div className="col-md-offset-2 col-md-8 create-button-container">
                  <input type="submit" className="user-profile-create-button" value="Save Profile" />
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
