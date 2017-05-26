getDoctors = require('./../js/doctor-lookup.js').getDoctors;
getSpecialties = require('./../js/doctor-lookup.js').getSpecialties;

var displayDoctors = function(doctors) {
  $('#output').text("");
  if (doctors.length === 0) {
    $('#output').append(`<h3>There are no doctors in the area that specialize in <em>${userInput}</em></h3>`);
  } else {
    doctors.forEach(function(doctor) {
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

var displaySpecialties = function(specialties) {
  specialties.forEach(function(specialty) {
    $('#doctor-drop').append(
      `<option value='${specialty}'>${specialty}</option>`
    );
  });
};

$(function() {
  var specialties = getSpecialties();
  setTimeout(function() {
    displaySpecialties(specialties);
  }, 1000);

  $('#doctor-form').submit(function(e) {
    e.preventDefault();
    if ($('#doctor-search').val() === "") {
      userInput = $('#doctor-drop').val();
    } else {
      userInput = $('#doctor-search').val();
    }
    $("#query").text("Doctors who specialize in: " + userInput);
    doctors = getDoctors(userInput);
    $('.labels').show();
    setTimeout(function() {
      displayDoctors(doctors);
    }, 1000);

    $('#doctor-search').val("");
  });



});