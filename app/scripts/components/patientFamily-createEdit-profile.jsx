var React = require('react');
var trumbowyg = require('trumbowyg');

var PatientFamily = require('../models/patient-family-model').PatientFamily;
var File = require('../models/file').File;
var AppHeader = require('./app-header.jsx');


/*
 * This component allows the Patient Family to both create and edit their profile.
 */
var PatientFamilyCreateEditProfile = React.createClass({

  getInitialState: function(){
    var patientFamilyData = JSON.parse(localStorage.getItem('patientFamily'));
    var patientFamily = new PatientFamily(patientFamilyData);

    var state = jQuery.extend({}, patientFamily.toJSON(), {
      patientFamily: patientFamily
    });
    return state;
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

  /*
   * the following method, handleSelectedNeeds, adds the checked "need" into an
   * array called, selectedNeeds.  If a need is not selected, it will be removed
   * from the list of needs.
   */
  handleSelectedNeeds: function(e){
    if(e.target.checked === true){
      this.state.selectedNeeds.push(e.target.value);
    }else{
      var needIndex = this.state.selectedNeeds.indexOf(e.target.value);
      this.state.selectedNeeds.splice(needIndex, 1);
    }

    this.setState({selectedNeeds: this.state.selectedNeeds});
  },
  handleImageChange: function(e){
    var self = this;
    var profilePic = e.target.files[0]
    var file = new File();
    file.set('name', profilePic.name);
    file.set('data', profilePic);
    file.save().done(function(){
      self.setState({'picUrl': file.get('url')});
      console.log('This family uploaded a new image.');
    });
  },
  handleSubmit: function(e){
    e.preventDefault();
    var patientFamily = this.state.patientFamily;

    var router = this.props.router;
    var recipient = JSON.parse(localStorage.getItem('user'));

    patientFamily.set('familyName', this.state.familyName);
    patientFamily.set('contactName', this.state.contactName);
    patientFamily.set('patientName', this.state.patientName);
    patientFamily.set('hospitalName', this.state.hospitalName);
    patientFamily.set('cancerType', this.state.cancerType);
    patientFamily.set('city', this.state.city);
    patientFamily.set('state', this.state.state);
    patientFamily.set('website', this.state.website);
    patientFamily.set('story', jQuery('#story').trumbowyg('html'));
    patientFamily.set('selectedNeeds', this.state.selectedNeeds);
    patientFamily.set('profileImage', this.state.picUrl);
    patientFamily.setPointer('recipient', recipient, '_User');

    patientFamily.save().done(function(){
      console.log('The following Patient Family profile has been saved: ', patientFamily.get('objectId'));
      router.navigate('patientfamily/' + patientFamily.get('objectId'), {trigger: true});
    });
  },

  /*
   * Trumbowyg is a WYSWYG editor that I included in my app so the Patient Family
   * could style their family story.
   */
  componentDidMount: function(){
    jQuery.trumbowyg.svgPath = 'fonts/icons.svg';
    jQuery('#story').trumbowyg();
  },
  render: function(){
    var self = this;

    // var needsAsColumns = needCollection.asColumns(4);

    var needCheckboxes = [['Financial Help', 'Child Care', 'Meals'], ['Groceries', 'Transportation', 'Clothes'], ['House Cleaning', 'Lawn Care', 'Prayer']].map(function(col, colIndex){
      var colItems = col.map(function(need){
        var isChecked = self.state.selectedNeeds.indexOf(need) >= 0;

        return (
          <li key={need}>
            <label className="checkbox-inline need-labels" htmlFor={need.replace(' ', '-')}>
              <input checked={isChecked} onChange={self.handleSelectedNeeds} type="checkbox" name="needs" id={need.replace(' ', '-')} className="need" value={need}></input>
              <span>{need}</span>
            </label>
          </li>
        );
      });

      return (
        <ul key={colIndex} className="list-of-needs">
          {colItems}
        </ul>
      )
    });

    return(
      <div className="row">
        <AppHeader />

        <div className="col-md-offset-2 col-md-8">
          <div className="recipient-form-container">

            <form onSubmit={this.handleSubmit} id="recipient-form" className="col-md-12">

              <div className="recipient-card">
                <div className="profile-pic col-md-4 col-xs-12">
                  <img className="patientFamily-profileImage-upload" src={this.state.picUrl} />
                </div>

                <div className="patientFamily-contact-details col-md-offset-1 col-md-6 col-xs-12">
                  <input onChange={this.addFamilyName} id="familyName" value={this.state.familyName} className="recipient-family-name" type="text" placeholder="Your Family Name" /><br/>
                  <input onChange={this.addContactName} id="contactName" value={this.state.contactName} className="recipient-contact-name" type="text" placeholder="Contact Name" /><br/>
                  <input onChange={this.addPatientName} id="patientName" value={this.state.patientName} className="patient-name" type="text" placeholder="Patient Name" /><br/>
                  <input onChange={this.addHospitalName} id="hospitalName" value={this.state.hospitalName} className="hospital-name" type="text" placeholder="Hospital Name" /><br/>
                  <input onChange={this.addCancerType} id="cancerType" value={this.state.cancerType} className="cancer-type" type="text" placeholder="Cancer Type" /><br/>
                  <div>
                    <input onChange={this.addCity} id="city" value={this.state.city} className="recipient-city" type="text" placeholder="City" />
                    <input onChange={this.addState} id="state" value={this.state.state} className="recipient-state" type="text" placeholder="State" />
                  </div>
                  <input onChange={this.addWebsite} id="website" value={this.state.website} className="recipient-website" type="url" placeholder="Website" /><br/>
                  <input onChange={this.handleImageChange} type="file" />
              </div>
              </div>

              <div className="recipient-story-form">
                <textarea name="familystory" id="story" defaultValue={this.state.story} className="family-story" placeholder="Tell us your story. How has cancer impacted you and/or your family?"/>
              </div>

              <div className="recipient-needs-form">
                <h3 className="share-needs">Share Your Needs </h3>
                <ul className="list-of-needs">
                  {needCheckboxes}
                </ul>
              </div>

              <div className="col-md-offset-3 col-md-6 create-button-container">
                <input type="submit" className="patientFamily-createButton" value="Save Profile" />
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
});


module.exports = PatientFamilyCreateEditProfile;
