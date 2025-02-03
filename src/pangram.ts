/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  
  const wordToCheck: string = String(word).toLowerCase(); 
  let charCodesShallBe = {
    from: typeof word === 'number' ? 48 : 97, 
    to: typeof word === 'number' ? 57 : 122,
  }

  for ( let i:number = charCodesShallBe.from; i<= charCodesShallBe.to; i++ ){
    console.log(String.fromCharCode(i));
    if ( !wordToCheck.includes(String.fromCharCode(i)) ) return false;
  };

  return true;

};
