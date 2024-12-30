// const map = new maptilersdk.Map({
//     container: 'map', // container's id or the HTML element to render the map
//     style: maptilersdk.MapStyle.STREETS, // style URL
//     center: [8.5419, 47.3799], // starting position [lng, lat]
//     zoom: 10.68, // starting zoom
//   });

let mapToken1 = mapToken;
console.log(mapToken1);
maptilersdk.config.apiKey = mapToken1;
    const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS, // style URL
    center: [77.2090, 28.6139], // starting position [lng, lat]
    zoom: 10.68, // starting zoom
    });