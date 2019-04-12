$(document).ready(function() {

<<<<<<< HEAD
  var superhero = $(this).attr("data-name");
  var queryURL = "https://comicvine.gamespot.com/api"  + superhero + "&api_key=b057b892091e49452a4d3b1ea5baa460104470f0&";
=======
  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $(this).attr("name");
  var queryURL = "https://comicvine.gamespot.com/api"  + superhero + "b057b892091e49452a4d3b1ea5baa460104470f0";
>>>>>>> 06cce63b76533c50ed4624fe931e3f59db2fb10e

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