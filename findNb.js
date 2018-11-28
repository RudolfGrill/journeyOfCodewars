'use strict'

/*function findNb(m) {
  //console.log(m, Math.pow(cycle, 3))

  if (m === Math.pow(cycle, 3)) {
    return cycle
  }
  //console.log("cycle:", cycle)

  findNb(m - (Math.pow(cycle++, 3)))

}*/

function findNb(m) {
  let cycle = 0;
  while (m !== Math.pow(cycle, 3)) {
    m -= Math.pow(cycle++, 3);
  }
  return cycle;
}

console.log(findNb(4183059834009), "expected: 2022");
console.log(findNb(135440716410000), "expected: 4824");
console.log(findNb(40539911473216), "expected: 3568");