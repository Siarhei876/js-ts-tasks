/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  
  console.log(object);

  return function( street, house, apartment, city, postalCode, country ){
    return `${street}, ${house}, ${apartment}, ${city}, ${postalCode}, ${country}`
  }

};
