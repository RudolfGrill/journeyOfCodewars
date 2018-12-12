'use strict'

const c1 = [0, 0, 1, 0, 0, 1, 0]; //4
const c2 = [0, 0, 0, 0, 1, 0]; //3
const c3 = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]; //6
const c4 = [0, 1, 0]; //1





function jumpingOnClouds(c) {
  console.log(c, 'eredeti')
  console.log('c.length: ', c.length)
  let steps = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 1 && c[i + 1] === 0) {
      console.log(c[i], c[i + 1])
      console.log(c, 'egy es nulla vágás előtt')
      steps++
      c.splice(0, 2)
      console.log(c, 'egy es nulla')

    } else if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 1) {
      console.log(c[i], c[i + 1])
      console.log(c, 'nulla es nulla vágás előtt')
      steps++
      c.splice(0, 1)
      console.log(c, 'dupla nulla')

    } else if (c[i] === 0 && c[i + 1] === 1) {
      console.log(c[i], c[i + 1])
      console.log(c, 'nulla es nulla vágás előtt')
      steps++
      c.splice(0, 2)
      console.log(c, 'dupla nulla')

    } else if (c[i] === 0) {
      console.log(c[i])
      console.log(c, 'nulla vágás előtt')
      c.splice(0, 1)
      console.log(c, 'nulla')
    }
    i--;
  }
  return steps;
};

//console.log(jumpingOnClouds(c1));
//console.log(jumpingOnClouds(c2));
console.log(jumpingOnClouds(c3));
//console.log(jumpingOnClouds(c4));