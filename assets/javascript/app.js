$(document).ready(function() {

  $("#superheroimage").hide();
  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $('#superhero-input').val().trim();

  var queryURL = "https://superheroapi.com/api/10157355780833919/search/" + superhero;

  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && $.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

/*    console.log(response);
    if(response.results.length > 1){
      for (let i = 0; i < response.results.length; i++) {
        var btn = document.createElement("button");
        var t = document.createTextNode([i]);
        btn.appendChild(t);
        document.body.appendChild(btn);
      }

    }
    else {
    var name = response.results[0].name;
    var birthplace = response.results[0].biography["place-of-birth"];
    var mainimage = response.results[0].image.url;
    }
*/
    console.log(response);
    var name = response.results[0].name;
    console.log(name);
    var displayName = $("<p>").text("Name: " + name);
    $("#superhero-date-of-birth").append(displayName);
    var birthplace = response.results[0].biography["place-of-birth"];
    console.log(birthplace);
    var displaybirthplace = $("<p>").text("Place of Birth: " + birthplace);
    $("#superhero-date-of-birth").append(displaybirthplace);
    for (let index = 0; index < array.length; index++) {
    var appearance = response.results[0].appearance[index];
    var displayappearance = $("<p>").text(appearance);
    $("#superhero-summary-origin").append(displayappearance);
    }
    var powerstats = response.results[0].powerstats.combat;
    console.log(powerstats);
    var displayPowerstats = $("<p>").text("Powerstats: " + powerstats);
    $("#superhero-powers-first-appearance-story-arcs").append(displayPowerstats);
    var firstappearance = response.results[0].biography["first-appearance"];
    console.log(firstappearance);
    var displayfirstappearance = $("<p>").text("First Appearance: " + firstappearance);
    $("#superhero-powers-first-appearance-story-arcs").append(displayfirstappearance);
    var groupaffiliation = response.results[0].connections["group-affiliation"];
    var displaygroup = $("<p>").text("Group Affiliations: " + groupaffiliation);
    $("#group-affiliations").append(displaygroup);
    var relatives = response.results[0].connections.relatives;
    var displayrelatives = $("<p>").text("Relatives: " + relatives);
    $("#relatives").append(displayrelatives);

  });

}