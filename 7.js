'use strict'

let a = "bitcoin take over the world maybe who knows perhaps";
let b = "turns out random test cases are easier than writing out basic ones";

function findShort(s){
  let shortest = 0;
  s.map(x => x.push(x.lenght < shortest))
  return shortest
};

console.log(findShort(a));
console.log(findShort(b));

