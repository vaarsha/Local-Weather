//to get users position
var latitude, longitude;
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $("#loc").html("latitude: " + latitude + "<br>longitude: " + longitude);
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=", function(result) {
        //update parameters
        console.log("hello");
        console.log("rs :", result);
        tmpC = Math.floor(result.main.temp);
        $("#tmp").html(tmpC + "&#8451");
        $("#plc").val(result.name + "," + result.sys.country);
      });
    });
  } else {
    $("#loc").html("Geolocation is not supported by this browser.");
  }
});
