//to get users position
var latitude, longitude;
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $("#loc").html("latitude: " + latitude + "<br>longitude: " + longitude);
      $.getJSON("api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=", function(result) {
     //update parameters
        
     
      });
    });
  } else {
    $("#loc").html("Geolocation is not supported by this browser.");
  }
});
