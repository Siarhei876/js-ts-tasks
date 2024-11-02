/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange( start, end ) {

  if ( start > end ) [ start, end ] = [ end, start ]

  const sumPositiveRange = ( a, b ) => ( b - a  + 1 ) * ( a + b ) / 2
  const notMixedRange = []

  if ( end <= 0 ){
    notMixedRange.push({ start: -end, end: -start, sign: -1, })
    console.log(notMixedRange)
  } else if ( start >= 0 ){
    notMixedRange.push({ start, end, sign: 1, })
  } else if ( start < 0 && end > 0 ){
    notMixedRange.push({ start: -start, end: 0, sign: -1, }, { start: 0, end, sign: 1, })
  } else throw new Error('Range breaking was bad')

  return notMixedRange.reduce(( acc, curV ) => acc + ( curV.sign) * sumPositiveRange( curV.start, curV.end ) , 0)
};
