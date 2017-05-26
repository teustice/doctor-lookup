var apiKey = require('./../.env').apiKey;

var doctors = [];
exports.getDoctors = function(medicalIssue) {
  doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      result.data.forEach(function(doctor){
        doctors.push({
          title: doctor.profile.title,
          firstName: doctor.profile.first_name,
          picture: doctor.profile.image_url
        });
      });
      console.log(doctors);
    })
   .fail(function(error){
      console.log("fail");
    });
};
