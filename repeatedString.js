'use strict'

let s1 = 'abcaca';
let n1 = 10;

let s2 = 'aba';
let n2 = 10;  


function repeatedString(s, n) {
  let aCount = (str) => str.split('')
    .filter(e => e === 'a')
    .length;
  let m = Math.floor(n / s.length)
  let rest = n - (s.length * m)
  return m * aCount(s) + aCount(s.substr(0, rest))

}

console.log(repeatedString(s1, n1));
console.log(repeatedString(s2, n2));