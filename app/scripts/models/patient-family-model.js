var _ = require('underscore');
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
 },
 toJSON: function(){
   var data = _.clone(this.attributes);

   delete data.updatedAt;
   delete data.createdAt;

   return data;
 }
});

var PatientFamilyCollection = Backbone.Collection.extend({
  model: PatientFamily,
  url: function(){
    var url = 'http://mrice.herokuapp.com/classes/RecipientProfile';

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
