$(document).ready(function() {

  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $(this).attr("name");
  var queryURL = "https://gateway.marvel.com/v1/public/characters/"  + superhero + "api_key=d33623a8fc87c83e6352e6be59775e50";

    
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
