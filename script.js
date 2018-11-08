$(document).ready(function(){
    $("button").on("click", function() {
      var searchTerm = $(this).attr("example-search-input");
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
 queryURL += '?' + $.param({
  'api-key': "a80bbaccde51425ebd955684ea745fb0",
  'q': searchTerm
 });
 
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            var re = response.response;
          //console.log(re.docs[0]);
          console.log(re.docs[0].headline);
            $('.navbar-brand mb-0 h1').append(re.docs[0].headline);
 
          }
        );
        });
    }); 