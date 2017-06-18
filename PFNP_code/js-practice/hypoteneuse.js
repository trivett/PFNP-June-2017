// write a function that returns the length of a hypoteneuse, given the lengths of the other two sides of a right triangle.
// you know the drill

function hypoteneuseLength(side1, side2){
  let sideOneSquared = Math.pow(side1, 2);
  let sideTwoSquared = side2 * side2;
  let sumOfSquares = sideOneSquared + sideTwoSquared;
  return Math.sqrt(sumOfSquares);
  
}