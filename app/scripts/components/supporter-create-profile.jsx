var React = require('react');

var SupporterProfile = require('../models/supporter-profile-model');


var SupporterCreateProfile = React.createClass({
  getInitialState: function(){
    return {
      'companyName': '',
      'familyName': '',
      'contactName': '',
      'website': '',
      'blurb': ''
    }
  },
  addSupporterCompanyName: function(e){
    this.setState({'companyName': e.target.value});
  },
  addSupporterFamilyName: function(e){
    this.setState({'familyName': e.target.value});
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

    var supporterProfile = new SupporterProfile();
    var router = this.props.router;
    var supporter = JSON.parse(localStorage.getItem('user'));

    supporterProfile.set('companyName', this.state.companyName);
    supporterProfile.set('familyName', this.state.familyName);
    supporterProfile.set('contactName', this.state.contactName);
    supporterProfile.set('website', this.state.website);
    supporterProfile.set('blurb', this.state.blurb);

    supporterProfile.setPointer('supporter', supporter, '_User');

    supporterProfile.save().done(function(){
      console.log('Supporter Profile: ', supporter);
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
                  <input onChange={this.addSupporterCompanyName} name="companyName" id="companyName" className="company-name" type="text" placeholder="Company Name if applicable" /><br/>
                  <input onChange={this.addSupporterFamilyName} name="familyName" id="familyName" className="family-name" type="text" placeholder="Family Name if applicable" /><br/>
                  <input onChange={this.addSupporterContactName} name="supportername" id="contactName" className="supporter-name" type="text" placeholder="Contact Name" /><br/>
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
