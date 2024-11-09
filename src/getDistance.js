/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
 
  const calcHypotenuse = ( a, b ) => Math.sqrt( a**2 + b**2 )
  const roundToDecimals = ( num, precision ) => Math.round( num * 100 ) / 100

  return roundToDecimals( calcHypotenuse( firstPoint.X - secondPoint.X, firstPoint.Y - secondPoint.Y ) ) 

};
