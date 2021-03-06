var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue) {
  var doctors = [];

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      console.log("doctor success");
      result.data.forEach(function(doctor) {
        doctors.push({
          title: doctor.profile.title,
          firstName: doctor.profile.first_name,
          picture: doctor.profile.image_url,
          specialties: doctor.specialties
        });
      });
    })
    .fail(function(error) {
      console.log("doctor fail");
    });
  return doctors;
};

exports.getSpecialties = function() {
  var specialties = [];
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
    .then(function(result) {
      console.log("specialty success");
      result.data.forEach(function(specialty) {
        specialties.push(specialty.name);
      });
    })
    .fail(function(error) {
      console.log("specialty fail");
    });
  return specialties;
};
