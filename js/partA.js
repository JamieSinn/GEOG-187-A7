/**
 * Created by jamie on 20/11/2016.
 */
var map = L.map('map').setView([43.466, -80.53], 15);
L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: 'Map data &copy; 2013 OpenStreetMap contributors'}).addTo(map);
