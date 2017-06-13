

# OMDB API exercise

Look at the documentation on omdbapi.com



http://www.omdbapi.com/?t=zootopia



Note that `  "Response": "True"` bit. Try an invalid movie. False. okay. 



1) Show that in the css, we hide the result and error divs by default.

2) Walk through the HTML

3) Explain `keyup` function, then `getJSON` by showing the docs

4)  Show the form in action with the console open.

5) Change the keyup function to only fire if the query is 3 characters or more

```javascript
    if (omdbData.Response == "True"){
      renderMovie(omdbData);
    } else {
      renderError();
    }
```



Remove comments



6) Now time to show the results on the front end. Do the title together. Then they do year and actors.



```javascript
function renderMovie(data) {
  $('.result').show(); // this shows the div with class "result"
  $('#title').html(data.Title); //this adds the title from data into the page
  $('#year').html(data.Year); 
    $('#actors').html(data.Actors);

}

function renderError() {
  $('.error').show();
}
```



7) Time for the poster. Have them look up attr in jquery docs. Manually pull of a url from the api response in the console logs, then paste into src. Now do it with the actual response.

`$('#poster').attr("src", data.Poster);`



8) Note that for when there is a bit between two valid movies, such as between Rocky, Rocky I (invalid) then Rocky II (valid), the error text persists. Fix that. `$('.error').hide()` goes in success block of api handling function.



9) what happens when you press enter? Default behavior. Pass in e to the function and call e.preventDefault();







------

start:

```javascript
$('#movie-search-form').keyup(function() {
  // this function fires on keyup. as you type in the searchbar, it fires searchIMDB function
  $('.result').hide(); // while we wait for the API to respond, we hide the last search result for that split second
  searchIMDB(this.query.value); // calling the next function with the text the user inputs
});

function searchIMDB(query) {
  // this is the function that makes the request with jQuerys's getJSON

  $.getJSON('http://www.omdbapi.com/', {
    t: query, // this query comes from the argument passed in parens above, which
    plot: "short",
    r: 'json'
  }, function(omdbData) { //this function fires after the network request finishes.
    if (omdbData.Response == "True"){
      console.log(omdbData);
    // Things worked! Show the movie data by calling the renderMovie function, pass in the omdbData variable
    } else {
      // render an error here.
      console.log(omdbData);
    }
  });
}

function renderMovie(data) {
  $('.result').show(); // this shows the div with class "result"
  // we aren't done here! we need some more code to show the data and the

}

function renderError() {
  $('.error').show();
}
```

finish: 

```javascript
$('#movie-search-form').keyup(function(e) {
  e.preventDefault();
  if (this.query.value.length > 2){
    $('.result').hide();
    searchIMDB(this.query.value);
  }
});

function searchIMDB(query) {
  $.getJSON('http://www.omdbapi.com/', {
    t: query,
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    if (omdbData.Response == "True"){
      $('.error').hide();
      renderMovie(omdbData)
    } else {
      renderError()
    }
  });
}

function renderMovie(data) {
  $('.result').show();
  $('#poster').attr("src", data.Poster)
  $('#title').html(data.Title);
  $('#year').html(data.Year);
  $('#actors').html(data.Actors);
}

function renderError() {
  $('.error').show();
}
```

