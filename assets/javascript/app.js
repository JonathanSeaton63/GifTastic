$(document).ready(function () {

    var movies = ["Toy Story", "Star Wars", "Harry Potter", "Lord of The Rings", "Back to The Future", "Jurrasic Park"];
    renderButtons();

    function displayImgs() {
        $("#display-images").empty();
        var moive = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + moive + "&api_key=b0V2z3eKPa2Ei3SO0virA66pj2LDYSGO&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function (response) {
            var results = response.data;
            console.log(results);
            
            for (var i = 0; i < results.length; i++) {
                var displayDiv = $("<div>");
                displayDiv.addClass("holder");

                var image = $("<img>");
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i].images.original_still.url);
                image.attr("data-animate", response.data[i].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

                var rating = response.data[i].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(pRating);
                $("#display-images").append(displayDiv);
            }
        })
    };

    function renderButtons() {
        $("#buttonView").empty();

        for (var j = 0; j < movies.length; j++) {
            var newButton = $("<button>");
            newButton.attr("class", "movie");
            newButton.attr("id", "input");
            newButton.attr("data-name", movies[j]);
            newButton.text(movies[j]);
            $("#buttonView").append(newButton);
            
        }
    }

    function imageChangeState() {
        var state = $(this).attr("data-state");
        console.log(state);

        if (state == "still") { 
            $(this).attr('src', $(this).data("animate"));
            $(this).attr('data-state', "animate");
        }
        else {
            $(this).attr('src', $(this).data("still"));
            $(this).attr('data-state', "still");
        }
    }

    $("#addBtn").on("click", function () {
        var input = $("#user-input").val().trim();
        // "#user-input".empty();
        movies.push(input);

        renderButtons();

        console.log(movies);

        return false;

       

    })

    $(document).on("click", "#input", displayImgs);
    $(document).on("click", ".gif", imageChangeState);

});