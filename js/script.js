var search = document.getElementById("search");

function getMovieInfo(){
    $.ajax({
        url : `https://www.omdbapi.com/?apikey=49aa13d3&t=${search.value}`,
        method : "GET",
        success : function(res)
        {
            document.getElementById("poster").src = res.Poster;
            document.getElementById("movieName").innerHTML = res.Title;
            document.getElementById("year").innerHTML = res.Year;
            document.getElementById("duration").innerHTML = res.Runtime;
            document.getElementById("plot").innerHTML = res.Plot;
            document.getElementById("actor").innerHTML = res.Actors;
            document.getElementById("director").innerHTML = res.Director;
            document.getElementById("genre").innerHTML = res.Genre;
            document.getElementById("country").innerHTML = res.Country;
            document.getElementById("released").innerHTML = res.Released;
            document.getElementById("lang").innerHTML = res.Language;
        }
    })
}