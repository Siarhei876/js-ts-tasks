/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @param {number} anySalary.....
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary( firstSalary, secondSalary, thirdSalary, anySalary ) {

  const sortedSalaries = [ ...arguments ].sort((a, b) => a - b)

  return sortedSalaries[ sortedSalaries.length - 1 ] - sortedSalaries[0]
};
