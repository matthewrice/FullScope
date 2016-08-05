var _ = require('underscore');
var Backbone = require('backbone');


var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var PatientFamily = PointerFieldModel.extend({
 idAttribute: 'objectId',
 urlRoot: 'https://mrice.herokuapp.com/classes/RecipientProfile',
 defaults: {
   'selectedNeeds': []
 },
 toJSON: function(){
   var data = _.clone(this.attributes);

   delete data.updatedAt;
   delete data.createdAt;

   return data;
 },
 save: function(attributes, options){
   var self = this;
   options = options || {};
   attributes = attributes || {};

   this.set(attributes);

   return Backbone.Model.prototype.save.call(this, attributes, options).then(function(){
     localStorage.setItem('patientFamily', JSON.stringify(self.toJSON()));
   });
 }
});

var PatientFamilyCollection = Backbone.Collection.extend({
  model: PatientFamily,
  url: function(){
    var url = 'https://mrice.herokuapp.com/classes/RecipientProfile';

    if(this.whereClause){
      url += this.whereClause;
    }
    console.log('url: ', url);
    return url;
  },
  query: function(objectId){
    this.whereClause = '?where={"recipient":{"__type":"Pointer","className":"_User","objectId":"' + objectId + '"}}';
    return this;
  },
  parse: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  'PatientFamily': PatientFamily,
  'PatientFamilyCollection': PatientFamilyCollection
};
