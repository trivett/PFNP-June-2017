// Write some code that goes through the procedure of changing 32 farenheit to celsius. You should get 0.
// Then change the farenheit number to 212 Your code should output 100.

// Then we will make a *function* that can take any number and output the correct celsius conversion.



// function greet(name) {
//   let personToGreet = name;
//   console.log(`Why hello ${personToGreet}!`);
// }


function farenheitToCelsius(farenheit){
  if (typeof farenheit == "number"){
    let step1 = farenheit - 32;
    let step2 = step1 * 5/9;
    return step2;
  } else {
    return "Please provide a number and try again.";
  }
}
