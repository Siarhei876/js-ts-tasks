/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence( arr ) {

  let currentSeq = [];
  let biggestSeq = [];
  let last = ( arr ) => arr[ arr.length - 1 ];

  for ( let i = 0; i < arr.length; i++){

    if ( arr[i] !== currentSeq[ currentSeq.length - 1 ] ){

      if ( currentSeq.length > biggestSeq.length ) biggestSeq = currentSeq.slice()
      currentSeq = []
    }

    currentSeq.push(arr[i])
  }

  return last[arr] === last[currentSeq] && currentSeq.length > biggestSeq.length ? 
    currentSeq :
    biggestSeq;

};
