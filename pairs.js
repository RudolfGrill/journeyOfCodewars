'use strict';

let n = 10;
let n1 = 10;
let n2 = 10;
let n3 = 10;
let n4 = 10;

let ar1 = [10, 20, 20, 10, 10, 30, 50, 10, 20, 34]
let ar2 = [10, 10, 20, 20, 21, 30, 30]
let ar3 = [10, 20, 20, 10, 10, 30, 50, 10, 20, 34, 34, 11]
let ar4 = [10, 20, 20, 10, 10, 30, 50, 10, 20, 34, 34, 39, 39, 39]
let ar5 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]
let ar6 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 11, 12]

function sockMerchant(n, ar) {
  let array = ar.sort(function (a, b) {
    return a - b
  })
  let ans = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      ans++;
      i++;
    } 
  }
  return ans;

}

//console.log(sockMerchant(n, ar1));
//console.log(sockMerchant(n, ar4));
console.log(sockMerchant(n, ar5));
console.log(sockMerchant(n, ar6));
