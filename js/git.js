var apiKey = require('./../.env').apiKey;

Load = function() {

};

Load.prototype.loadUser = function(name) {
  $.get('https://api.github.com/users/'+ name + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('#showdetails').append("<li>" + response.login  +"</li>");
    $('#show').append("<li>" + response.html_url  +"</li>");
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.loadModule= Load;
