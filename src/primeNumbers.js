/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers( highestNumber ) {

  const cash = [ 1, 2, 3, 5, 7 ]

  const isNextPrime = function( number ){

    for ( prime of cash ){
      if ( number % prime === 0 ) return false
    }

    return true

  }
  
  return function( start, end ){

    console.log(`Start: ${start}, End: ${end}`);

    const lastKnownPrime = cash[ cash.length - 1 ]
    // console.log(lastKnownPrime);

    for ( let i = lastKnownPrime + 1; i <= end; i++ ){
      if ( isNextPrime( i ) ) cash.push( i )
    }

    const indexOfStart = cash.indexOf( start ) === -1 ? 0 : cash.indexOf( start )
    const indexOfEnd = cash.indexOf( end ) === -1 ? cash[ cash.length - 1 ] : cash.indexOf( end )

    console.log(cash.length);
    // return cash.slice( indexOfStart , indexOfEnd )

  }

};
