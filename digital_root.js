'use strict'


/*let digital_root = (n) => {
  if (n < 10) {
    return n;
  } else {
    return sumDigit(Math.floor(n % 10 + Math.floor(n / 10)));
  }
}*/

function digital_root(n) {
  return (n - 1) % 9 + 1;
}
console.log(digital_root(12));