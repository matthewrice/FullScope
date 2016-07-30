var Backbone = require('backbone');


var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var SupporterProfileModel = PointerFieldModel.extend({
 idAttribute: 'objectId',
 urlRoot: 'http://mrice.herokuapp.com/classes/SupporterProfile',
});

var SupporterProfileCollection = Backbone.Collection.extend({
  model: SupporterProfileModel,
  url: 'http://mrice.herokuapp.com/classes/SupporterProfile',
  parse: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  'SupporterProfileModel': SupporterProfileModel,
  'SupporterProfileCollection': SupporterProfileCollection
};
