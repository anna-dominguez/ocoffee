var map = L.map("map").setView([48.8746593, 2.292612], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([48.8746593, 2.292612]).addTo(map);
marker.bindPopup("<b>oCoffee</b><br>La boutique").openPopup();
