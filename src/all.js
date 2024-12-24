/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all( promisesArray ) {

  return new Promise( ( resolve, reject ) => {

    const results = new Array( promisesArray.length )
    let promiseCounter = promisesArray.length

    for ( let i = 0; i < promisesArray.length; i++ ){

      promisesArray[ i ]
      .then( 
        ( result ) => {
          results[ i ] = result
          if ( --promiseCounter <= 0 )  resolve( results )         
        }

      )
      .catch(( error ) => {
        reject( error )

      })
    }

  })

};
