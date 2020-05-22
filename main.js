
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4284706, lng:-99.1276627},
    zoom: 18
  });
} 
initMap()

var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var pos1 = new google.maps.Marker({
    position: {lat: -19.4284706, lng: -99.1276627},
    map: map,
    icon: image
  });
