/**
 * Created by jamie on 20/11/2016.
 */
var map = L.map('map').setView([43.466, -80.53], 15);
L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: 'Map data &copy; 2013 OpenStreetMap contributors'}).addTo(map);
var marker = L.marker([43.466, -80.53]).addTo(map);
var marker2 = L.marker([43.468, -80.54]).addTo(map);
var marker3 = L.marker([43.466, -80.52]).addTo(map);
var marker4 = L.marker([43.466, -80.54]).addTo(map);
var marker5 = L.marker([43.4707528, -80.5347138]).addTo(map);

marker.bindPopup("<b>Waterloo Park</b><br>Local Park near to the UWP residence.");
marker2.bindPopup("<b>UW South Enterance</b><br>University of Waterloo South Enterance near SCH");
marker3.bindPopup("<b>WLU Res</b><br><a href='http://wlu.ca'>The Competition</a>");
marker4.bindPopup("<b>Laurel Creek</b><br>A nice walking area");
marker5.bindPopup("<b>UWP Main Office</b><br><img src='https://lh4.googleusercontent.com/-KBs9MIOqEOs/WCjBuL8aytI/AAAAAAAAGgg/bYbPD-KK6wM_i_7m0YjcNfkGpoWQrBHSQCLIB/s408-k-no/' width:25%;>");