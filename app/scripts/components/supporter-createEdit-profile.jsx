var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;
var File = require('../models/file').File;
var AppHeader = require('./app-header.jsx');


var SupporterCreateEditProfile = React.createClass({
  getInitialState: function(){
    var supporterData = JSON.parse(localStorage.getItem('supporter'));
    var supporterProfile = new SupporterProfileModel(supporterData);

    var state = jQuery.extend({}, supporterProfile.toJSON(), {
      supporterProfile: supporterProfile
    });

    return state
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
  handleImageChange: function(e){
    var self = this;
    var profilePic = e.target.files[0]
    var file = new File();
    file.set('name', profilePic.name);
    file.set('data', profilePic);
    file.save().done(function(){
      self.setState({'picUrl': file.get('url')});
    });
  },
  handleSubmit: function(e){
    e.preventDefault();
    var supporterProfile = this.state.supporterProfile;
    var router = this.props.router;
    var supporter = JSON.parse(localStorage.getItem('user'));

    supporterProfile.set('supporterName', this.state.supporterName);
    supporterProfile.set('contactName', this.state.contactName);
    supporterProfile.set('website', this.state.website);
    supporterProfile.set('blurb', this.state.blurb);
    supporterProfile.set('profileImage', this.state.picUrl);

    supporterProfile.setPointer('supporter', supporter, '_User');

    supporterProfile.save().done(function(){
      console.log('Supporter Profile: ', supporter);
      router.navigate('supporter/' + supporterProfile.get('objectId'), {trigger: true});
    });
  },
  render: function(){

    return(
      <div className="row">
        <AppHeader />

        <div className="supporter-form-container col-md-12">
          <form onSubmit={this.handleSubmit} id="supporter-form" className="supporterForm col-xs-offset-4 col-xs-4 ">
            <div className="supporter-card">
              <div className="profile-pic col-md-4">
                <img className="profile-image-upload-plus-icon" src={this.state.picUrl} />
              </div>
              <div className="supporter-contact-details col-md-8">
                <input onChange={this.addSupporterName} value={this.state.supporterName} name="supporterName" id="supporterName" className="supporter-name" type="text" placeholder="Supporter name" /><br/>
                <input onChange={this.addSupporterContactName} value={this.state.contactName} name="contactName" id="contactName" className="contact-name" type="text" placeholder="Contact name if needed" /><br/>
                <input onChange={this.addSupporterWebsite} value={this.state.website} name="supporterwebsite" id="website" className="supporter-website" type="url" placeholder="Website" /><br/>
                <textarea onChange={this.addSupporterBlurb} value={this.state.blurb} name="blurb" id="blurb" className="blurb-input" maxLength="120" placeholder="Tell us a little bit about you."/>
              </div>
            </div>
            <div className="col-md-offset-2 col-md-8 create-button-container">
              <input type="submit" className="supporterProfile-create-button" value="Save Profile" />
            </div>
            <div>
              <input onChange={this.handleImageChange} type="file" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SupporterCreateEditProfile;
