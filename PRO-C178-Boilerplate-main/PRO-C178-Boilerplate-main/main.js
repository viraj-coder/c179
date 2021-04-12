mapboxgl.accessToken='pk.eyJ1IjoicG9vamFjaGhpa2FyYWRhaGl5YSIsImEiOiJja25lZmJseGIwM3FuMnltZXEwODViZzlqIn0.0D5qwe7i_qXTqR193jgrGw'
let latitude=22.7868542,longitude=88.3643296
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    centre:[longitude,latitude],
    zoom:16
})
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions:{
        enableHighAccuracy:true

    },
    trackUserLocation:true

    })
)
map.addControl(
new MapboxDirections({
    accesToken:mapboxgl.accesToken
}),
"top-left"
)