'use strict'


function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else if (n < 0) {
    //let toFive = n % 5
    //let next = n - toFive
    //return next
    return n - (n % 5);
  } else if (n > 0) {
    return n + (5 - (n % 5));
  }
}

console.log(roundToNext5(2))
console.log(roundToNext5(21))
console.log(roundToNext5(-2));
console.log(roundToNext5(-7));
console.log(roundToNext5(-5));
console.log(roundToNext5(0));