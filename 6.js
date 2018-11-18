'use strict'

function array_diff(a, b) {
  return a.filter(x => !b.includes(x))
}

console.log(array_diff([1, 2], [1]))
console.log(array_diff([1, 1, 1, 5, 2], [1, 7]))