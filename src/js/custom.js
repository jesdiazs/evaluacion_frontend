$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// EMPIEZA EL CODIGO DE GOOGLE MAP
function initMap(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 12,
    center: {lat: -33.45, lng:-70.6667}
  });
}
// TERMINA EL CODIGO DE GOOGLE MAP
// esconder el Selec de vehiculos
$(".vehi").fadeOut(3000, function(){
$("botonTwo").fadeOut(1000, function(){
	}); 
});  

//EMPIEZA MI FUNCION PARA EL PRIMER SELECT

$("#botonOne").click(function valForm(){

	var ciUno = $("#cityOne").val();
	var ciDos = $("#cityTwo").val();
	if (ciUno === 0 || ciDos === 0){
		alert("Debe seleccionar una ciudad de Origen y otra de Destino");
	}else if(ciUno === ciDos){
			alert("Deben ser diferente el Origen y el Destino");
		}else{
			$("#botonOne").fadeOut(1000, function(){
			});  
            $("#cityOne").prop('disabled', 'disabled');
            $("#cityTwo").prop('disabled', 'disabled');
        }
}); 