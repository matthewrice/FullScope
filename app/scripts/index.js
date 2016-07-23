// libraries and frameworks
var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');

require('./router');

$.ajaxSetup({
   beforeSend: function(xhr){
     xhr.setRequestHeader("X-Parse-Application-Id", "tiyfrontendclass");
     xhr.setRequestHeader("X-Parse-REST-API-Key", "demodayiscoming");
    //  xhr.setRequestHeader("X-Parse-Session-Token", data.sessionToken);
   }
 });

// run router
 $(function(){
   Backbone.history.start();
 });
