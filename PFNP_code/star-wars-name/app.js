/******************
I remembered some stupid chain letter joke thing from the 90s the other day that went something like this: 

How to find your Star Wars name: 

To get your first name, Take the first 3 letters of your first name, then add the first three letters of your last name.

Your last name is the first three letters of your street name plus the first three letters of your city

Sound like an algorithm? Yeah pretty much.

Google challenges:

How do you get the first x letters of a string in JavaScript? 

BONUS: 

How do you make a string lower case?

How do you capitalize the first letter of a string? 



******************/

function firstThreeLettersDowncased(str){
  return str.slice(0,3).toLowerCase();
}

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function myStarWarsName(firstName, lastName, street, city) {
  let swFirstName = `${firstThreeLettersDowncased(firstName)}${firstThreeLettersDowncased(lastName)}`;
  let swLastName = `${firstThreeLettersDowncased(street)}${firstThreeLettersDowncased(city)}`;
  return `${capitalizeFirstLetter(swFirstName)} ${capitalizeFirstLetter(swLastName)}`;
}

// myStarWarsName("Vincent", "Trivett", "Dupont", "Brooklyn")

$("#sw-name-inputs").on('keyup', function(event){
  event.preventDefault();
  let starWarsName = myStarWarsName($("#first-name").val(),$("#last-name").val(),$("#street").val(),$("#city").val());
  $("#answer").html(starWarsName);
})


// myStarWarsName("Vincent", "Trivett", "DuPont", "Brooklyn") => "Vintri Dupbro"

