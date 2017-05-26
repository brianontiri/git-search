var Load = require('./../js/git.js').loadModule;
$(document).ready(function() {
  $('#search').click(function() {
    var name = $('#username').val();
    $('#username').val("");
   var final = new Load();
   var c = final.loadUser(name);
 
  });
});
