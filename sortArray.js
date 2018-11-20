'use strict'

//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers 
//must be on their places.

//Zero isn't an odd number and you don't need to move it. 
//If you have an empty array, you need to return it.


function sortArray(array) {
  let indices = [];
  array
  .filter((v, i) => v % 2 && indices.push(i))
  .sort((a, b) => a - b)
  .forEach((v, i) => array[indices[i]] = v);
  return array
};




console.log(sortArray([5, 3, 2, 8, 1, 4]), "result: [1, 3, 2, 8, 5, 4]");
console.log(sortArray([5, 3, 1, 8, 0]), "result [1, 3, 5, 8, 0]");
//console.log(sortArray([]), "result: []");