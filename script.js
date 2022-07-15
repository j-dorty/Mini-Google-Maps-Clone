mapboxgl.accessToken = 'pk.eyJ1IjoiamFja2RvcnR5IiwiYSI6ImNsNWtiN3M2NTA2bmszYmp2aXp3MTNiem8ifQ.Eed2N3xMcvBrM6Lwj2En3w';
const nav = navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})
console.log(navigator)

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {

    setupMap([-74.5, 40])
}

function setupMap(center) {

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position [lng, lat]
        zoom: 14, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
    })

    map.addControl(directions, 'top-left')

}



map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});