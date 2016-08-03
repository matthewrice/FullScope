var Backbone = require('backbone');


var File = Backbone.Model.extend({
  defaults: {
    name: 'default.jpg'
  },
  urlRoot: function(){
    return 'http://mrice.herokuapp.com/files/'+ encodeURIComponent(this.get('name'));
  },
  save: function(attributes, options){
    options = options || {};
    attributes = attributes || {};

    this.set(attributes);

    var image = this.get('data');
    options.data = image;
    options.processData = false;
    options.contentType = false;
    options.beforeSend = function(request){
      request.setRequestHeader("X-Parse-Application-Id", "tiyfrontendclass");
      request.setRequestHeader("X-Parse-REST-API-Key", "demodayiscoming");
      request.setRequestHeader("Content-Type", image.type);
    };
    return Backbone.Model.prototype.save.call(this, attributes, options);
  }
});

module.exports = {
  'File': File
};
