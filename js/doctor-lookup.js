var apiKey = require('./../.env').apiKey;

var doctors = [];
exports.getDoctors = function(medicalIssue) {
  doctors = [];
  $('#output').text("");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     console.log("success");
      result.data.forEach(function(doctor){
        doctors.push({
          title: doctor.profile.title,
          firstName: doctor.profile.first_name,
          picture: doctor.profile.image_url
        });
      });

      if (doctors.length === 0){
        $('#output').append(`<h3>There are no doctors in the area that specialize in <em>${medicalIssue}</em></h3>`);
      }
      doctors.forEach(function(doctor){
        $('#output').append(
          "<div class='col-md-4'>" +
            "<img src='" + doctor.picture + "'/>" +
          "</div>" +
          "<div class='col-md-4'>" +
            "<h3>" + doctor.firstName + "</h3>" +
          "</div>" +
          "<div class='col-md-4'>" +
            "<h3>" + doctor.title + "</h3>" +
          "</div>" +
          "<br>" +
          "<br>"
        );
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};
