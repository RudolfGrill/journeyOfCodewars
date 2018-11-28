'use strict'

var SequenceSum = (function() {
  function SequenceSum() {

  }

  SequenceSum.showSequence = function(count) {
    for (let index = 0; index <= count; index++) {
      return index + 1
    }
  };

  return SequenceSum;

})();

console.log(SequenceSum(6))