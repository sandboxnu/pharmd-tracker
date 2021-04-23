import axios from "axios";

/**
 * Creates an object from
 * @param {Array} inputArray
 * @param {Array} keySourceArray
 * @return {Object}
 */
export function arrayToObject(inputArray, keySourceArray) {
  const obj = {};
  inputArray.forEach((value, index) => (obj[keySourceArray[index]] = value));
  return obj;
}

export const doAllRequests = requests => axios.all(requests);


export function formatDecimal(preformatted) {
  const preformattedString = preformatted.toString();
  const decimalRegex = /^(?<wholeNumber>\d*)(?<point>\.)?(?<decimal>\d*)?/;
  const numPlaces = 2;

  const matches = preformattedString.match(decimalRegex);
  const wholeNumber = matches.groups.wholeNumber;
  const point = matches.groups.point || '.';
  let decimal = matches.groups.decimal || '00';

  while (decimal.length < numPlaces) {
    decimal = decimal + '0';
  }

  if (decimal.length > numPlaces) {
    decimal = decimal.substring(0, numPlaces);
  }

  return wholeNumber + point + decimal;
}
