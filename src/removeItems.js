/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  
  const result = []
  const checkNonEquality = ( el ) => typeof el === "object" ? JSON.stringify( el ) !== JSON.stringify( value ) : el !== value

  for ( let el of arr ) if ( checkNonEquality( el ) ) result.push( el )

  return result

};
