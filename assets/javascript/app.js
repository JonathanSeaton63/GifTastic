
var movies = ["Toy Story", "Star Wars", "Harry Potter", "Lord of The Rings", "Back to The Future", "Jurrasic Park"];

 function renderButton() {
    for (var i = 0; i < movies.length; i++);
    var button = $("<button>");
    button.addClass('movie');
     $("#buttonview").append();
}
function dispayImages() {
    $("#movieView").empty();
    var movie = $(this).attr('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movies + "&api_key=b0V2z3eKPa2Ei3SO0virA66pj2LDYSGO&limit=10"
}

$.ajax({
    queryURL: "http://api.giphy.com/v1/gifs/search?q=k&api_key=b0V2z3eKPa2Ei3SO0virA66pj2LDYSGO&limit=10,",
    method: "GET",
})
    .done(function (response) {
        console.log(response)
    })

$('#addMovie').on("click", function () {
    var movie = $('.moive-input').trim().val();
    movies.push(movie);
})


renderButton();

$(document).on("click", ".movie", dispayImages);

var still = $(this).attr("data-still");
var animate = $(this).attr("data-animate");

if ($(this).attr('data-state') == "still") {
    $(this).attr('src', animate);
    $(this).attr('data-state', "animate");
}
else {
    $(this).attr('src', still);
    $(this).attr('data-state', "still");
}
