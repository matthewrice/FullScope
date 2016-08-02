var Backbone = require('backbone');


var File = Backbone.Model.extend({
  defaults: {
    name: 'default.jpg'
  },
  urlRoot: function(){
    return 'http://mrice.herokuapp.com/classes/files/'+ this.get('name');
  },
  save: function(){
    var fileInputData = this.get('data');
    return this.sync(url, options, fileInputData);
  }
});

module.exports = {
  'File': File
};
