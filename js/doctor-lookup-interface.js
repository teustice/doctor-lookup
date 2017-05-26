getDoctors = require('./../js/doctor-lookup.js').getDoctors;

var displayDoctors = function(doctors) {
  console.log(doctors);
  specialties = [];
  if (doctors.length === 0){
    $('#output').append(`<h3>There are no doctors in the area that specialize in <em>${userInput}</em></h3>`);
  } else {
    doctors.forEach(function(doctor){
      $('#output').append(
        "<div class='container'>" +
          "<div class='col-md-4'>" +
            "<img src='" + doctor.picture + "'/>" +
          "</div>" +
          "<div class='col-md-4'>" +
            "<h3>" + doctor.firstName + "</h3>" +
          "</div>" +
          "<div class='col-md-4'>" +
            "<h3>" + doctor.title + "</h3>" +
          "</div>" +
        "</div>");
    });
  }
};

$(function(){
  $('#doctor-form').submit(function(e){
    e.preventDefault();
    userInput = $('#doctor-search').val();
    $("#query").text("Doctors who specialize in: " + userInput);
    doctors = getDoctors(userInput);
    $('.labels').show();
    setTimeout(function(){
      displayDoctors(doctors);
    }, 1000);

    $('#doctor-search').val("");
  });



});
