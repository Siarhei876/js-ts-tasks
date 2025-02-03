/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */


module.exports.converter = function (value: number, from: string, to: string): number {

  console.log(value + ` from: ${from} + to: ${to}` );
  const conversionRoutes = {
    meterToMile: (meter: number) => meter / 1609.34,
    mileToMeter: (mile: number) => mile * 1609.344,
    gramToPound: (gram: number) => gram * 0.00220462,
    poundToGram: (pound: number) => pound * 453.592,
    celsiusToKelvin: (celsius: number) => celsius + 273.15,
    kelvinToCelsius: (kelvin: number) => kelvin - 273.15
  };

  const cutToTwoDecimals = (value: number) => Math.round((value * 100)) / 100;

  switch (from) {
    case 'm':
      if (to !== 'mi') throw new Error('Invalid conversion from m');
      return cutToTwoDecimals(conversionRoutes.meterToMile(value));

    case 'mi':
      if (to !== 'm') throw new Error('Invalid conversion from mi');
      return cutToTwoDecimals(conversionRoutes.mileToMeter(value));

    case 'gr':
      if (to !== 'pound') throw new Error('Invalid conversion from gr');
      return cutToTwoDecimals(conversionRoutes.gramToPound(value));

    case 'pound':
      if (to !== 'gr') throw new Error('Invalid conversion from pound');
      return cutToTwoDecimals(conversionRoutes.poundToGram(value));

    case 'C':
      if (to !== 'K') throw new Error('Invalid conversion from C');
      return cutToTwoDecimals(conversionRoutes.celsiusToKelvin(value));

    case 'K':
      if (to !== 'C') throw new Error('Invalid conversion from K');
      return cutToTwoDecimals(conversionRoutes.kelvinToCelsius(value));

    default:
      throw new Error(`Unknown unit: ${from}`);
  }
};
