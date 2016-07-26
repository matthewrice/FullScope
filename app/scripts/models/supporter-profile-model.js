var Backbone = require('backbone');


var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var SupporterProfile = PointerFieldModel.extend({
 idAttribute: 'objectId',
 urlRoot: 'http://mrice.herokuapp.com/classes/SupporterProfile',
});


module.exports = SupporterProfile;