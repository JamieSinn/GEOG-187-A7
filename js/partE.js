/**
 * Created by jamie on 20/11/2016.
 */
var map = L.map('map').setView([43.470, -80.544], 15);
L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: 'Map data &copy; 2013 OpenStreetMap contributors'}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties) {
        layer.bindPopup("<b>" + feature.properties.name + "</b> serves a small coffee for $" + feature.properties.coffee_pri);
    }
}
var _coffeeshop = new L.geoJson(coffee, {
    onEachFeature: onEachFeature
}).addTo(map);
