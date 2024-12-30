// const map = new maptilersdk.Map({
//     container: 'map', // container's id or the HTML element to render the map
//     style: maptilersdk.MapStyle.STREETS, // style URL
//     center: [8.5419, 47.3799], // starting position [lng, lat]
//     zoom: 10.68, // starting zoom
//   });

// let mapToken1 = mapToken;
// console.log(mapToken1);
// maptilersdk.config.apiKey = mapToken1;
//     const map = new maptilersdk.Map({
//     container: 'map', // container's id or the HTML element to render the map
//     style: maptilersdk.MapStyle.STREETS, // style URL
//     center: [77.2090, 28.6139], // starting position [lng, lat]
//     zoom: 10.68, // starting zoom
//     });

  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9 // starting zoom
});

// console.log(coordinates);
const marker = new mapboxgl.Marker({color: "red"})
.setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(
  `<h4>${listing.title}</h4>
  <p>Exact location provided after booking</p>`)
)
.addTo(map);

