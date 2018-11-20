'use strict'

//Task
//Given an array of integers, remove the smallest value. 
//Do not mutate the original array/list. 
//If there are multiple elements with the same value, remove the one with a lower index. 
//If you get an empty array/list, return an empty array/list.

//Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  numbers.reduce((accumulator, current) => {
    let smallestIndex = 0
    if (smallestIndex === 0 || accumulator[length - 1] !== current) {
      accumulator.push(current);

    }
    return accumulator;
  }, []);
  //throw "TODO: removeSmallest";
}


console.log(removeSmallest([1, 2, 3, 4, 5]), "expected: [2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), "expected: [5, 3, 2, 4]");