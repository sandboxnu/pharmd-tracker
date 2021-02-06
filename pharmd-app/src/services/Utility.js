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
