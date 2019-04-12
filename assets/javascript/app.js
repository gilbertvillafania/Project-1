$(document).ready(function() {

  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $('#superhero-input').val().trim();

  var queryURL = "https://superheroapi.com/api/10157355780833919/search/" + superhero;

  console.log(superhero);

  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && $.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    superheroDiv = $("<div class='superhero'");
    var image = response.image;
    console.log(response.image);
    var displayimage = $("<img>").attr("src", image);
    superheroDiv.append(displayimage);

  });

}