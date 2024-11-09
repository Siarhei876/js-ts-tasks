/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub( str1, str2 ) {

  if ( str1.length > str2.length ) [ str1, str2 ] = [ str2, str1 ];

  //Is Set ok?
  const uniqSubstrings = new Set();
  
  function wrapString( str, shift ){

    let zero = shift;
    let value = str;

    return {

      index: ( index ) => value[ index - zero  ],
      shift: ( shift ) => wrapString( value, zero + shift ),
      projection: function( interval /* number */ ){
        // How to pad a string with falsy symbols????
        // Will be an array with string slice and empty strings as padding:
        const charArr = Array( interval )

        for ( let i = 0; i < charArr.length; i++ ){
            charArr[i] = this.index( i ) || ''    
        }

        return charArr
      },

      get zero(){ return zero },
      get value(){ return value } 
    }
  }

  let wStr1 = wrapString( str1, + ( 0 - str1.length ) );
  let curIntersection = '';

  while ( true ){
    for ( let i = 0; i < str2.length; i++ ){
      
      if ( str2[i] !== wStr1.index(i) ){
        uniqSubstrings.add(curIntersection)
        curIntersection = ''
      } else curIntersection += str2[i]
    }

    //EXIT:
    if ( wStr1.zero + 1 > str2.length ) break    /////////////////????MAY BE +!

    wStr1 = wStr1.shift( +1 )
  }

  const result =  Array.from( uniqSubstrings ).sort( ( a, b ) => b.length - a.length )

  return result[0]
  
};

