// Make a function that accepts one argument "age" and return to the user whether they are allowed in the bar.

// Bonus:
// What if the drinking age was different in different places? Re-do the function so that it can take two arguments. Use yr head, see if you can make your function more easily reusable in different countries.

// && and

// || or

// === is equal to

// >= greater than or equal to
// (etc)

// !== not equal to

function bouncer(customerAge, legalDrinkingAge){
  console.log("beginning boucer function");
  console.log(customerAge);

  if (customerAge >= legalDrinkingAge){
    return "okay, come in";
  } else if (customerAge === legalDrinkingAge){
    return "you get a free drink";
  } else {
    return "come back when you are older";
  }
}