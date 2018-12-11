'use strict'

let n = 8;
let s = 'UDDDUDUU'; //1

let n2 = 12;
let s2 = 'DDUUDDUDUUUD'; //2

function countingValleys(n, s) {
  let counter = 0;
  let valley = 0;

  let valleycounter = () => {
    if (counter === 0) {
      return valley++
    }
  };

  s.split('').forEach(e => {
    if (e == ['U']) {
      counter++;
      valleycounter(counter)
    } else {
      counter--;
    };
  });

  return valley;
}

console.log(countingValleys(n, s));
console.log(countingValleys(n2, s2));