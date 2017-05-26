getDoctors = require('./../js/doctor-lookup.js').getDoctors;

$(function(){
  test = $('input').val();
  $('button').click(function(){
    getDoctors(test);
  });
});
