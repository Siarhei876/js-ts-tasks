/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers( highestNumber ) {

  const cash = [ 2, 3, 5, 7 ]

  //calculates nextPrime from cash.last to end or highestNumber
  const isNextPrime = function( number ){

    if ( number < 8 ) return false
    for ( let i = 0; cash[ i ] <= Math.sqrt( number ) ; i++ ){

      if ( ( ( number % cash[ i ] === 0 ) ) ){

        return false
      }
    }

    return true
  }

  const indexOfClosestPrime = function( num, startOrEnd ){
    //will search cash for first Prime from start and last Prime before end IN CASH

    let indexOfNum = cash.indexOf( num ) 
    if ( indexOfNum !== -1 ) return indexOfNum

    if ( startOrEnd === 'end' ) return cash.length -1

    while ( num < cash[ cash.length - 1 ]){

      num++
      indexOfNum = cash.indexOf( num )
      if ( indexOfNum !== -1 ) return indexOfNum  

    }

  }
  
  return function( start, end ){

    end = end < highestNumber ? end : highestNumber
    const lastKnownPrime = cash[ cash.length - 1 ];

    for ( let i = lastKnownPrime; i <= end; i++ ){

      if ( isNextPrime( i ) ) cash.push( i )
    }

    const indexOfStart = indexOfClosestPrime( start, 'start' )
    const indexOfEnd = indexOfClosestPrime( end, 'end')

    if ( indexOfStart === undefined || indexOfEnd === undefined ) return []
    return cash.slice( indexOfStart , indexOfEnd + 1 )

  }

};
