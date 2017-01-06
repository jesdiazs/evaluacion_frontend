$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// EMPIEZA EL CODIGO DE GOOGLE MAP
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: -33.45, lng:-70.6667}
  });
}
// TERMINA EL CODIGO DE GOOGLE MAP




