/**
 * Created by jamie on 20/11/2016.
 */

var map = L.map('map').setView([43.46938, -80.54032], 15);
L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: 'Map data &copy; 2013 OpenStreetMap contributors'}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties) {
        layer.bindPopup("<b>" + feature.properties.Point + "</b> is located at " + feature.geometry.coordinates + "  lat/long.");
    }
}
var _points = new L.geoJson(points, {
    onEachFeature: onEachFeature
}).addTo(map);
var _coffee = new L.geoJson(coffee, {
    onEachFeature: onEachFeature}).addTo(map);
