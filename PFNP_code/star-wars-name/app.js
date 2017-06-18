function firstThreeDowncased (str){
  return str.slice(0,3).toLowerCase();
}

function capitalizeFirstLetter (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function myStarWarsName(firstName, lastName, street, city){
  let swFirstName = `${firstThreeDowncased(firstName)}${firstThreeDowncased(lastName)}`
  let swLastName = `${firstThreeDowncased(street)}${firstThreeDowncased(city)}`

  return `${capitalizeFirstLetter(swFirstName)} ${capitalizeFirstLetter(swLastName)}`
}

$("#sw-name-inputs").on("keyup", function(event){
  event.preventDefault();
  let starWarsName = myStarWarsName($("#first-name").val(), $("#last-name").val(), $("#street").val(), $("#city").val());
  $("#answer").html(starWarsName)
});