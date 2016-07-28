var React = require('react');
var trumbowyg = require('trumbowyg');
// console.log('trumbowyg: ', trumbowyg);

var PatientFamily = require('../models/patient-family-model').PatientFamily;
// var User = require('../models/user');


var PatientFamilyCreateProfile = React.createClass({
  getInitialState: function(){
    return {
      'familyName': '',
      'contactName': '',
      'patientName': '',
      'hospitalName': '',
      'cancerType': '',
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
  addPatientName: function(e){
    this.setState({'patientName': e.target.value});
  },
  addHospitalName: function(e){
    this.setState({'hospitalName': e.target.value});
  },
  addCancerType: function(e){
    this.setState({'cancerType': e.target.value});
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
    if(e.target.checked === true){
      this.state.selectedNeeds.push(e.target.value)
      console.log(this.state.selectedNeeds);
    }else{
      e.target.checked === false
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state.selectedNeeds);
    var patientFamily = new PatientFamily();
    var router = this.props.router;
    var recipient = JSON.parse(localStorage.getItem('user'));

    patientFamily.set('familyName', this.state.familyName);
    patientFamily.set('contactName', this.state.contactName);
    patientFamily.set('city', this.state.city);
    patientFamily.set('state', this.state.state);
    patientFamily.set('website', this.state.website);
    patientFamily.set('story', jQuery('#story').trumbowyg('html'));
    patientFamily.set('selectedNeeds', this.state.selectedNeeds);

    patientFamily.setPointer('recipient', recipient, '_User');

    patientFamily.save().done(function(){
      console.log('Recipient Profile: ', recipientProfile);
      router.navigate('patientfamily/:id', {trigger: true});
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
                  <input onChange={this.addFamilyName} id="familyName" className="recipient-family-name" type="text" placeholder="Your Family Name" /><br/>
                  <input onChange={this.addContactName} id="contactName" className="recipient-contact-name" type="text" placeholder="Contact Name" /><br/>
                  <input onChange={this.addPatientName} id="patientName" className="patient-name" type="text" placeholder="Patient Name" /><br/>
                  <input onChange={this.addHospitalName} id="hospitalName" className="hospital-name" type="text" placeholder="Hospital Name" /><br/>
                  <input onChange={this.addCancerType} id="cancerType" className="cancer-type" type="text" placeholder="Cancer Type" /><br/>
                  <div>
                    <input onChange={this.addCity} id="city" className="recipient-city" type="text" placeholder="City" />
                    <input onChange={this.addState} id="state" className="recipient-state" type="text" placeholder="State" />
                  </div>
                  <input onChange={this.addWebsite} id="website" className="recipient-website" type="url" placeholder="Website" /><br/>
                </div>
              </div>
              <div className="recipient-story-form">
                <textarea name="familystory" id="story" className="family-story" placeholder="Tell us your story. How has cancer impacted you and/or your family?"/>
              </div>
              <div className="recipient-needs-form">
                <h3 className="share-needs">Share Your Needs </h3>
                <ul className="list-of-needs">
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="childCare">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="childCare" className="need" value="Child Care"></input>
                      <span>Child Care</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="clothes">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="clothes" className="need" value="Clothes"></input>
                      <span>Clothes</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="financialHelp">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="financialHelp" className="need" value="Financial Help"></input>
                      <span>Financial Help</span>
                    </label>
                  </li>
                </ul>
                <ul className="list-of-needs">
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="groceries">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="groceries" className="need" value="Groceries"></input>
                      <span>Groceries</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="houseCleaning">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="houseCleaning" className="need" value="House Cleaning"></input>
                      <span>House Cleaning</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="lawnCare">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="lawnCare" className="need" value="Lawn Care"></input>
                      <span>Lawn Care</span>
                    </label>
                  </li>
                </ul>
                <ul className="list-of-needs">
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="meals">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="meals" className="need" value="Meals"></input>
                      <span>Meals</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="mothersHelper">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="mothersHelper" className="need" value="Mothers Helper"></input>
                      <span>Mother's Helper</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-inline need-labels" htmlFor="transportation">
                      <input onChange={this.handleSelectedNeeds} type="checkbox" name="needs" id="transportation" className="need" value="Transportation"></input>
                      <span>Transportation</span>
                    </label>
                  </li>
                </ul>
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


module.exports = PatientFamilyCreateProfile;
