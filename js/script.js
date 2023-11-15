function init (){
 //alert("it works!")
 const center = { lat: -34.397, lng: 150.644 };
  
  // Map with the specified center and zoom level
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: center,
  });

  // Marker
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Marker Title',
  });

  // Add a zoom control to the map
  const zoomControl = new google.maps.ZoomControlOptions();
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControl);

  // Custom map styling
  const style = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];
  map.setOptions({ styles: style });
}
google.maps.event.addListener(window, "load", init);