// Initialize and add the map
function initMap() {
  // The location of Olastorpsvägen 23, Kristianstad
  const Kristianstad = { lat: 56.052040, lng: 14.146970 };
  // The map, centered at Olastorpsvägen 23, Kristianstad
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Kristianstad,
  });
  // The marker, positioned at Olastorpsvägen 23, Kristianstad
  const marker = new google.maps.Marker({
    position: Kristianstad,
    map: map,
  });
}