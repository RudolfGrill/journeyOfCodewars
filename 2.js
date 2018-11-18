'use strict'

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

let times = 0;

function persistence(num) {
  console.log("start number", num)
  console.log("times:", times);
  if (num < 10) {
    return times;
  } else {
    times++;
    sum += a % 10;
    a = Math.floor(a / 10);
    return persistence(sum);
  }
}


//console.log(persistence(39));
//console.log(persistence(4));
//console.log(persistence(25));
console.log(persistence(999));