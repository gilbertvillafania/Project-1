function displaySuperhero() {
  event.preventDefault();
  var superhero = $(this).attr("name");
  var queryURL = "https://comicvine.gamespot.com/api"  + superhero + "b057b892091e49452a4d3b1ea5baa460104470f0";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var superheroDiv = $("div id 'superhero-image");
    var image = response.image;
    var displayimage = $("<img>").attr("src", image);
    superheroDiv.append(displayimage);

  });

}