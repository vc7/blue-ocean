function initialize() {
	var latLng = new google.maps.LatLng(24.1479423,120.6722901);
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
	  center: latLng,
	  zoom: 17,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
	    position: latLng,
	    map: map,
	    title: 'Hello World!'
	  });
}
google.maps.event.addDomListener(window, 'load', initialize);