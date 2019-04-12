function displaySuperhero() {

  var superhero = $(this).attr("data-name");
  var queryURL = "https://comicvine.gamespot.com/api"  + superhero + "b057b892091e49452a4d3b1ea5baa460104470f0";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var superheroDiv = $("div class = 'superhero'");
    var image = response.image;
    var displayimage = $("<img>").attr("src", image);
    superheroDiv.append(displayimage);

  });

}