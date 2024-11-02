/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  return Math.round( ( ( Math.PI * ( r ** 2 ) * h ) / 3 ) * 100 ) / 100
};
