var _ = require('underscore');
var Backbone = require('backbone');


var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var SupporterProfileModel = PointerFieldModel.extend({
 idAttribute: 'objectId',
 urlRoot: 'http://mrice.herokuapp.com/classes/SupporterProfile',
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
     localStorage.setItem('supporter', JSON.stringify(self.toJSON()));
   });
 }
});

var SupporterProfileCollection = Backbone.Collection.extend({
  model: SupporterProfileModel,
  url: function(){
    var url = 'http://mrice.herokuapp.com/classes/SupporterProfile';

    if(this.whereClause){
      url += this.whereClause;
    }
    return url;
  },
  query: function(objectId){
    this.whereClause = '?where={"supporter":{"__type":"Pointer","className":"_User","objectId":"' + objectId + '"}}';
    return this;
  },
  parse: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  'SupporterProfileModel': SupporterProfileModel,
  'SupporterProfileCollection': SupporterProfileCollection
};
