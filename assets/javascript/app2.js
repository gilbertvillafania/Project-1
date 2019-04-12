$(document).on('click', '#add-superhero', function() {

    var superhero = $(this).html();

    var queryURL = "https://superheroapi.com/api/access-token" + superhero + "10157355780833919";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      var results = response.data;
        $('#superhero-image-view').empty();
        for ( var j=0; j < results.length; j++) {
                    var imageDiv = $('<div>');
                    var imageView = results[j].images.fixed_height.url;
                    var still = results[j].images.fixed_height_still.url; 

        var gifImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                    gifImage.attr('data-state', 'still');
                    $('#gifs-view').prepend(gifImage);
                    gifImage.on('click', playGif);

        var rating = results[j].rating;
        var displayRated= $('<p>').text("Rating: " + rating);
        $('#gifs-view').prepend(displayRated);
  }

});

    