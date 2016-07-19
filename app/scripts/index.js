// libraries and frameworks
var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');

require('./router');

// auth to post to mrice parse server
$.ajaxSetup({
   beforeSend: function(xhr){
     xhr.setRequestHeader("X-Parse-Application-Id", "tiyfrontendclass");
     xhr.setRequestHeader("X-Parse-REST-API-Key", "demodayiscoming");
   }
 });

// run router
 $(function(){
   Backbone.history.start();
 });
