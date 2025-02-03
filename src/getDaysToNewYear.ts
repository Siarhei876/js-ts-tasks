/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear( targetDate: Date | string ): number {

  const firstDayOf2024: Date = new Date( '2024.01.01' );
  let someDayBefore: Date = typeof targetDate === 'string' ? 
    new Date( targetDate.split(/[.,\-:]/g).reverse().join('/') ):
    new Date( targetDate );

  if ( isNaN( someDayBefore.getTime() ) ) throw new Error('getDaysToNewYear:Wrong date Provided');

  return Math.floor( ( firstDayOf2024.getTime() - someDayBefore.getTime() ) / ( 24 * 3600 * 1000 ) );

};
