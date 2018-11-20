'use strict'

function isTriangle(a, b, c) {

  let p = (a + b + c) / 2
  let area = Math.sqrt((p - a) * (p - b) * (p - c))

  if (area > 0 && a > 0 && b > 0 && c > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))
console.log(isTriangle(-1, 2, 2))
