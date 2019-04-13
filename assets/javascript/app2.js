$(document).ready(function () {

  // Event listener for location input
  $(document).on("click", "#add-superhero", displaySuperhero);
});
var mapsApiLoaded = false
function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $('#superhero-input').val().trim();

  var queryURL = "https://superheroapi.com/api/10157355780833919/search/" + superhero;

  console.log(superhero);

  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    superheroDiv = $("<div class='superhero'");
    var image = response.image;
    console.log(response.image);
    var displayimage = $("<img>").attr("src", image);
    superheroDiv.append(displayimage);
  });

}

function initMap() {
  mapsApiLoaded = true

}
function onLocationInput() {
  // Initialize your map
  var map
  //var zip = $('#the-input').val()
  if (!mapsApiLoaded)
    return

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


}

function addMarker() {
  if (!mapsApiLoaded)
    return
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-34.397, 150.644),
    map: map
  })
}
