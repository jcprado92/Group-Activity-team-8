
function fn(...arr) {
    if (!arr.every((num) => Number.isNumber(num)))
      throw "All arguments must be numbers.";
    return arr.reduce((a, b) => a + b);

  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.

  Adnan is here!!!!

