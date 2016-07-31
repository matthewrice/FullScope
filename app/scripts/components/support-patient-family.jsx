var React = require('react');
var AppHeader = require('./app-header.jsx');



var SupportPatientFamily = React.createClass({

  render: function(){

    return (
      <div className="row">
        <AppHeader />

      //   <div key={profile.get('objectId')} className="col-xs-offset-3 col-xs-6">
      //     <div className="">
      //       <div className="recipient-card">
      //         <div className="profile-pic col-md-4">
      //           <img src="images/chloe.jpg" />
      //         </div>
      //         <div className="col-md-8 patientFamily-contact-info">
      //           <div className="row">
      //             <h3 className="col-xs-12 familyName-detail">
      //               {profile.get('familyName')}
      //             </h3>
      //           </div>
      //           <div className="row">
      //             <div className="detail">
      //               <div className="col-xs-4">Home Town:</div>
      //               <div className="col-xs-8 contact-details">{profile.get('city')}, {profile.get('state')}</div>
      //             </div>
      //             <div className="detail">
      //               <div className="col-xs-4">Contact Name:</div>
      //               <div className="col-xs-8 contact-details">{profile.get('contactName')}</div>
      //             </div>
      //             <div className="detail">
      //               <div className="col-xs-4">Patient Name:</div>
      //               <div className="col-xs-8 contact-details">{profile.get('patientName')}</div>
      //             </div>
      //             <div className="detail">
      //               <div className="col-xs-4">Hospital Name:</div>
      //               <div className="col-xs-8 contact-details">{profile.get('hospitalName')}</div>
      //             </div>
      //             <div className="detail">
      //               <div className="col-xs-4">Cancer Type:</div>
      //               <div className="col-xs-8 contact-details">{profile.get('cancerType')}</div>
      //             </div>
      //             <div className="detail">
      //               <div className="col-xs-4">Website:</div>
      //               <div className="col-xs-8 contact-details">{profile.get('website')}</div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="recipient-story">
      //         <div className="family-story">{profile.get('story')}</div>
      //       </div>
      //       <div className="recipient-needs">
      //         <h3 className="patient-family-needs">Our current needs </h3>
      //         <ul>{currentNeeds}</ul>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
});


module.exports = SupportPatientFamily;
