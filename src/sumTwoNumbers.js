/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {

  const normalizeNum = ( num ) => Number( String(num).replace( /[^0-9+-.]/g, '') ) 

  return normalizeNum(firstNumber) + normalizeNum(secondNumber)
  
};
