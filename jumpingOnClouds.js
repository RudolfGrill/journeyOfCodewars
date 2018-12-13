'use strict'

const c1 = [0, 0, 1, 0, 0, 1, 0]; //4
const c2 = [0, 0, 0, 0, 1, 0]; //3
const c3 = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]; //6
const c4 = [0, 1, 0]; //1
const c5 = [0, 0] //1

function jumpingOnClouds(c) {
  let steps = 0;
  if (c[c.length - 3] === 1) {
    steps++;
  }
  if (c.length === 2) {
     steps++;
  }
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0 ||
      c[i] === 0 && c[i + 1] === 1 && c[i + 2] === 0) {
      steps++;
      c.splice(0, 2);
    } else if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 1) {
      steps++;
      c.splice(0, 1);

    } else if (c[i] === 0) {
      c.splice(0, 1);
    }
    i--;
  }
  return steps;
};

console.log(jumpingOnClouds(c1), '4');
console.log(jumpingOnClouds(c2), '3');
console.log(jumpingOnClouds(c3), '6');
console.log(jumpingOnClouds(c4), '1');
console.log(jumpingOnClouds(c5), '1');
