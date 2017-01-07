//to get users position
var latitude, longitude;
//function for celsius and fahrenheit conversion
function change(tp) {
  var tmpF = Math.floor((tp * 1.8) + 32);
  if ($('input[type=checkbox]').prop('checked') ){
    $("#tmp").html(tmpF +"&#8457");
  } else {
    $("#tmp").html(tp+"&#8451");
  }
}
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $("#loc").html("latitude: " + latitude + "<br>longitude: " + longitude);
      $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=c213f9ca1b6333f1b214582c52904e92", function(result) {
        //update parameters
        console.log("hello");
        console.log("rs :", result);
        tmpC = Math.floor(result.main.temp);
        $("#tmp").html(tmpC + "&#8451");
        $("#plc").val(result.name + "," + result.sys.country);
        $("input[type=checkbox]").on("click",function(){
       change(tmpC); 
      });
      });
    });
  } else {
    $("#loc").html("Geolocation is not supported by this browser.");
  }
});
function handle(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    //search by value
    var res = document.getElementById('plc').value;
    $('input[type=checkbox]').prop('checked', false);
    $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + res + "&units=metric&APPID=c213f9ca1b6333f1b214582c52904e92", function(val) {
      tmpC = Math.floor(val.main.temp);
      $("#tmp").html(tmpC + "&#8451");
      $("input[type=checkbox]").on("click",function(){
       change(tmpC); 
      });
    });
  }
}
