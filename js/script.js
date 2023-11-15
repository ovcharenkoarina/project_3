function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(53.186431, 50.095774);
  
  var mapOptions = {
    center: myLocation,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
  }
};

var myMap = new google.maps.Map(el, mapOptions);

var marker = new google.maps.Marker({
  position: myLocation,
  map: myMap,
  animation: google.maps.Animation.DROP,
  icon: 'images/icon.jpg'
});

var contentString = '<h1>Leningradskaya Street</h1><p>Leningradskaya Street is one of the best places to spend time in Samara, Russia</p>';

var infowindow = new google.maps.InfoWindow ({
  content: contentString
});

google.maps.event.addListener(marker, 'mouseover', function() {
  infowindow.open(myMap, marker);
});

}


google.maps.event.addDomListener(window, 'load', init);