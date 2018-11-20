'use strict'

let a = "bitcoin 3take over the 3w 3 world maybe who knows perhaps";
let b = "turns out random test cases are easier than writing out basic ones";
let c = "Monero MadeSafeCoin BTC Factom 21inc Ripple Dash Mine Dash Ripple Bitcoin Ripple BTC 21inc Steem"

function findShort(s) {
  return s.split(" ")
    .map(function (e) {
      return e.length
    })
    .sort((a, b) => {
      return a - b
    })
    .shift()
};

console.log(findShort(a));
console.log(findShort(b));
console.log(findShort(c));