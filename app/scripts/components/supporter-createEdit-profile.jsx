var React = require('react');

var SupporterProfileModel = require('../models/supporter-profile-model').SupporterProfileModel;
var File = require('../models/file').File;
var AppHeader = require('./app-header.jsx');


/*
 * This component allows the Supporter to both create and edit their profile.
 */
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
      console.log('This supporter uploaded a new image.');
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
      console.log('The following Supporter profile has been saved: ', supporterProfile.get('objectId'));
      router.navigate('supporter/' + supporterProfile.get('objectId'), {trigger: true});
    });
  },
  render: function(){

    return(
      <div className="row">
        <AppHeader />

        <div className="supporter-form-container col-md-12">
          <form onSubmit={this.handleSubmit} id="supporter-form" className="supporterForm col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
            <div className="supporter-card">
              <div className="profile-pic col-md-4 col-sm-5 col-xs-12">
                <img src={this.state.picUrl} />
              </div>
              <div className="supporter-contact-details col-md-8 col-sm-7 col-xs-12">
                <input onChange={this.addSupporterName} value={this.state.supporterName} name="supporterName" id="supporterName" className="supporterDetail supporter-name" type="text" placeholder="Supporter name" /><br/>
                <input onChange={this.addSupporterContactName} value={this.state.contactName} name="contactName" id="contactName" className="supporterDetail contact-name" type="text" placeholder="Contact name if needed" /><br/>
                <input onChange={this.addSupporterWebsite} value={this.state.website} name="supporterwebsite" id="website" className="supporterDetail supporter-website" type="url" placeholder="Website" /><br/>
                <textarea onChange={this.addSupporterBlurb} value={this.state.blurb} name="blurb" id="blurb" className="supporterDetail blurb-input" maxLength="300" placeholder="Tell us a little bit about you."/>
                <input onChange={this.handleImageChange} type="file" />
              </div>
            </div>
            <div className="col-xs-offset-3 col-xs-6 create-button-container">
              <input type="submit" className="supporterProfile-create-button" value="Save Profile" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SupporterCreateEditProfile;
