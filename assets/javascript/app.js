$(document).ready(function() {

  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $(this).attr("name");
  var queryURL = "https://comicvine.gamespot.com/api"  + superhero + "b057b892091e49452a4d3b1ea5baa460104470f0";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    superheroDiv = $("<div class='superhero'>")
    var image = response.image;
    console.log(response.image);
    var displayimage = $("<img>").attr("src", image);
    superheroDiv.append(displayimage);

  });

}