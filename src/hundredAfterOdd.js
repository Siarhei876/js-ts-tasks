/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd( arr ) {

  const result = []
  
  arr.forEach( ( el, i, arr) => {
    if ( el % 2 !== 0){
      result.push( el )
      result.push( 100 )
    } else result.push( el )
  })

  return result

};
