$(document).ready(function() {

  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $('#superhero-input').val().trim();

  var queryURL = "https://superheroapi.com/api/10157355780833919/search/" + superhero;

  //Alternative MARVEL API (finally works)--> var queryURL = "https://gateway.marvel.com:443/v1/public/characters?limit=1&offset=100&ts=1&apikey=d33623a8fc87c83e6352e6be59775e50&hash=1a4999d31629ee0d9931a0944b7f5b1f"; 
  
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
