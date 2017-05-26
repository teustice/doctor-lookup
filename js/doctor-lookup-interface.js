getDoctors = require('./../js/doctor-lookup.js').getDoctors;

$(function(){
  $('#doctor-form').submit(function(e){
    e.preventDefault();
    userInput = $('input').val();
    getDoctors(userInput);
    $('input').val("");
  });
});
