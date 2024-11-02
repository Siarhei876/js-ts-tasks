/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {

  let slice = str.split('').reverse().slice(0, symbolsCount).reverse().join('');

  return symbolsCount > str.length ?
    str : 
    slice + str + slice
  ;

}