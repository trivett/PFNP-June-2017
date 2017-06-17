$('#movie-search-form').keyup(function(e) {
  e.preventDefault();
  $('.result').hide();
  var userSearchQuery = this.query.value;
  searchOMDB(userSearchQuery);
});

function searchOMDB(query) {
  $.getJSON('https://www.omdbapi.com/', {
    // get data from api service here
    t: query,
    apikey: "c12529c3",
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    // deal with response from api here
  });
}

function renderMovie(data) {
  $('.result').show();
  $('#title').html(data.Title);
  $('#year').html(data.Year);
  $('#actors').html(data.Actors);
  $('#poster').attr("src", data.Poster);
  $('.error').hide();
}

function renderError() {
  $('.error').show();
}
