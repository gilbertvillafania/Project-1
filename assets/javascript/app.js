$(document).ready(function() {

  $(document).on("click", "#add-superhero", displaySuperhero);

});

function displaySuperhero(event) {

  event.preventDefault();

  var superhero = $('#superhero-input').val().trim().toLowerCase();

  var queryURL = "https://superheroapi.com/api/10220044790216467/search/" + superhero;

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
    console.log(superhero);
    for (let index = 0; index < response.results.length; index++) {
      if(response.results[index].name.toLowerCase() === superhero){
        $("#mainimage").empty();
        var mainimage = $("#mainimage").attr("src", response.results[index].image.url)
        console.log(mainimage);
        $("#superhero-basic-info").empty();
        var name = response.results[index].name;
        var displayName = $("<p>").text("Name: " + name);
        $("#superhero-basic-info").append(displayName);
        var birthplace = response.results[index].biography["place-of-birth"];
        var displaybirthplace = $("<p>").text("Place of Birth: " + birthplace);
        $("#superhero-basic-info").append(displaybirthplace);
        var fullname = response.results[index].biography["full-name"];
        var displayfullname = $("<p>").text("Full Name: " + fullname);
        $("#superhero-basic-info").append(displayfullname);
        var aliases = response.results[index].biography.aliases;
        var displayaliases = $("<p>").text("Aliases: " + aliases);
        $("#superhero-basic-info").append(displayaliases);
        var race = response.results[index].appearance.race;
        var displayrace = $("<p>").text("Race: " + race);
        $("#superhero-attributes").empty();
        $("#superhero-attributes").append(displayrace);
        var alignment = response.results[index].biography.alignment;
        var displayalignment = $("<p>").text("Alignment: " + alignment);
        $("#superhero-attributes").append(displayalignment);
        var work = response.results[index].work.occupation;
        var displaywork = $("<p>").text("Occupation: " + work);
        $("#superhero-attributes").append(displaywork);
        var publisher = response.results[index].biography.publisher;
        var displaypublisher = $("<p>").text("Publisher: " + publisher);
        $("#superhero-attributes").append(displaypublisher);
        var combat = response.results[index].powerstats.combat;
        var displaycombat = $("<p>").text("Combat: " + combat);
        $("#superhero-powers-first-appearance").empty();
        $("#superhero-powers-first-appearance").append(displaycombat);
        var durability = response.results[index].powerstats.durability;
        var displaydurability = $("<p>").text("Durability: " + durability);
        $("#superhero-powers-first-appearance").append(displaydurability);
        var intelligence = response.results[index].powerstats.intelligence;
        var displayintelligence = $("<p>").text("Intelligence: " + intelligence);
        $("#superhero-powers-first-appearance").append(displayintelligence);
        var power = response.results[index].powerstats.power;
        var displaypower = $("<p>").text("Power: " + power);
        $("#superhero-powers-first-appearance").append(displaypower);
        var speed = response.results[index].powerstats.speed;
        var displayspeed = $("<p>").text("Speed: " + speed);
        $("#superhero-powers-first-appearance").append(displayspeed);
        var strength = response.results[index].powerstats.strength;
        var displaystrength = $("<p>").text("Strength: " + strength);
        $("#superhero-powers-first-appearance").append(displaystrength);
        var firstappearance = response.results[index].biography["first-appearance"];
        var displayfirstappearance = $("<p>").text("First Appearance: " + firstappearance);
        $("#superhero-powers-first-appearance").append(displayfirstappearance);
        var groupaffiliation = response.results[index].connections["group-affiliation"];
        var displaygroup = $("<p>").text("Group Affiliations: " + groupaffiliation);
        $("#group-affiliations").empty();
        $("#group-affiliations").append(displaygroup);
        var relatives = response.results[index].connections.relatives;
        var displayrelatives = $("<p>").text("Relatives: " + relatives);
        $("#relatives").empty();
        $("#relatives").append(displayrelatives);

      }
    }
  });

}
