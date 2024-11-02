/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = ( firstNumber, secondNumber ) => firstNumber > secondNumber ? '>' :
  firstNumber < secondNumber ? '<' : '='
;