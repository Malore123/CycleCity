console.log('geolocate.js ready to roll')

if (navigator.geolocation)
 
    {
navigator.geolocation.getCurrentPosition(showPosition) 
    }
//                   .watchPosition

var userMarker = null 

function showPosition(position)
{
    console.log(position)
    
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    
    var coordinates = new mapboxgl.LngLat ( longitude, latitude)
    
    if(!userMarker)
{ // create a div element for the marker
    var div = document.createElement('div')
    // add a class called 'marker' to the div
    div.className = 'marker user'
    // create the custom marker
    userMarker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map 
    }
    
    else
        {
            userMarker.setLnglat(coordinates)
        } 
}