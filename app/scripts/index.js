// libraries and frameworks
var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');

require('./router');


// run router
 $(function(){
   Backbone.history.start();
 });
