'use strict'

let list1 = [1, 2, 'a', 'b'];

let list2 = [1, 'a', 'b', 0, 15];



function filter_list(l) {
  return l.filter(Number.isInteger)
}


console.log(filter_list(list1),);

console.log(filter_list(list2));