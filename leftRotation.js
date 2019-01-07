'use strict'
//A left rotation operation on an array shifts each of the array's elements  unit to the left.

let a = [1, 2, 3, 4, 5];
let d = 4;

function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    a.push(a[0])
    a.splice(0, 1);
  }
  return a
}

console.log(rotLeft(a, d));
