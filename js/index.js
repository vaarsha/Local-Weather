//javascript file
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $("#loc").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
      });
    }
