var React = require('react');
var trumbowyg = require('trumbowyg');
// console.log('trumbowyg: ', trumbowyg);

var RecipientProfile = require('../models/recipient-profile-model');
// var User = require('../models/user');


var RecipientCreateProfile = React.createClass({
  getInitialState: function(){
    return {
      'familyName': '',
      'contactName': '',
      'city': '',
      'state': '',
      'website': '',
      'story': '',
      'selectedNeeds': []
    }
  },
  addFamilyName: function(e){
    this.setState({'familyName': e.target.value});
  },
  addContactName: function(e){
    this.setState({'contactName': e.target.value});
  },
  addCity: function(e){
    this.setState({'city': e.target.value});
  },
  addState: function(e){
    this.setState({'state': e.target.value});
  },
  addWebsite: function(e){
    this.setState({'website': e.target.value});
  },
  handleSelectedNeeds: function(e){
    // var self = this;
    // jQuery('.recipient-needs-form input:checked').each(function(){
    //   self.state.selectedNeeds.push(e.target.value);
    //   console.log(self.state.selectedNeeds);
    // });
    //this.setState({'selectedNeeds': e.target.value});
    if(e.target.checked === true){
      this.state.selectedNeeds.push(e.target.value)
      console.log(this.state.selectedNeeds);
    }else{
      e.target.checked === false
    }
    // jQuery(".need").each(function(){
    // jQuery(".need").click()
    // });
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state.selectedNeeds);
    var recipientProfile = new RecipientProfile();
    var router = this.props.router;
    var recipient = JSON.parse(localStorage.getItem('user'));

    recipientProfile.set('familyName', this.state.familyName);
    recipientProfile.set('contactName', this.state.contactName);
    recipientProfile.set('city', this.state.city);
    recipientProfile.set('state', this.state.state);
    recipientProfile.set('website', this.state.website);
    recipientProfile.set('story', jQuery('#story').trumbowyg('html'));
    recipientProfile.set('selectedNeeds', this.state.selectedNeeds);

    recipientProfile.setPointer('recipient', recipient, '_User');

    recipientProfile.save().done(function(){
      console.log('Recipient Profile: ', recipientProfile);
    });
  },
  componentDidMount: function(){
    jQuery.trumbowyg.svgPath = 'fonts/icons.svg';
    jQuery('#story').trumbowyg();
  },

  render: function(){

    return(
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <div className="recipient-form-container">

            <form onSubmit={this.handleSubmit} id="recipient-form">
              <div className="recipient-card">
                <div className="profile-pic col-md-4">
                  <img className="profile-image-upload-plus-icon" src="images/plainicon-plus-sign.svg" />
                </div>
                <div className="contact-details col-md-8">
                  <input onChange={this.addFamilyName} name="recipientfamilyname" id="familyName" className="recipient-family-name" type="text" placeholder="Your Family Name" /><br/>
                  <input onChange={this.addContactName} name="recipientcontactname" id="contactName" className="recipient-contact-name" type="text" placeholder="Contact Name" /><br/>
                  <div>
                    <input onChange={this.addCity} name="recipientcity" id="city" className="recipient-city" type="text" placeholder="City" />
                    <input onChange={this.addState} name="recipientstate" id="state" className="recipient-state" type="text" placeholder="State" />
                  </div>
                  <input onChange={this.addWebsite} name="recipientwebsite" id="website" className="recipient-website" type="url" placeholder="Website" /><br/>
                </div>
              </div>
              <div className="recipient-story-form">
                <textarea name="familystory" id="story" className="family-story" placeholder="Tell us your story. How has cancer impacted your family?"/>
              </div>
              <div className="recipient-needs-form">
                <h3 className="share-needs">Share Your Needs </h3>
                <label className="checkbox-inline need-labels" htmlFor="childCare">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="childCare" className="need" value="childCare"></input><span>Child Care</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="clothes">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="clothes" className="need" value="clothes"></input><span>Clothes</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="financialHelp">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="financialHelp" className="need" value="financialHelp"></input><span>Financial Help</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="groceries">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="groceries" className="need" value="groceries"></input><span>Groceries</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="houseCleaning">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="houseCleaning" className="need" value="houseCleaning"></input><span>House Cleaning</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="lawnCare">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="lawnCare" className="need" value="lawnCare"></input><span>Lawn Care</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="meals">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="meals" className="need" value="meals"></input><span>Meals</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="mothersHelper">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="mothersHelper" className="need" value="mothersHelper"></input><span>Mother's Helper</span>
                </label>
                <label className="checkbox-inline need-labels" htmlFor="transportation">
                  <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="transportation" className="need" value="transportation"></input><span>Transportation</span>
                </label>
              </div>
              <div className="col-md-offset-2 col-md-8 create-button-container">
                <input type="submit" className="user-profile-create-button" value="Save Profile" />
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
});


module.exports = RecipientCreateProfile;
