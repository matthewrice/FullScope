var Backbone = require('backbone');

var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var PatientFamily = PointerFieldModel.extend({
 idAttribute: 'objectId',
 urlRoot: 'http://mrice.herokuapp.com/classes/RecipientProfile',
 defaults: {
   'selectedNeeds': []
 }
});

var PatientFamilyCollection = Backbone.Collection.extend({
  model: PatientFamily,
  url: 'http://mrice.herokuapp.com/classes/RecipientProfile',
  parse: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  'PatientFamily': PatientFamily,
  'PatientFamilyCollection': PatientFamilyCollection
};
