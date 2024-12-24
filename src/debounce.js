/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {

  return (() => {

    let wasInvoked = false

    return (...args) => {

      if ( !wasInvoked ){
        wasInvoked = true
        let timer = setTimeout( () => {
          wasInvoked = false
          clearTimeout(timer)

        }, delay )
        
        return fn(...args)
      } 
    }

  })()
};

