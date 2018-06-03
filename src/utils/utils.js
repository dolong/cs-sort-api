import {
  compose,
  not,
  path,
} from 'ramda';

/**
 * Check if an item is a number
 * @param item
 */
export const isNumber = item =>
  !Number.isNaN(parseFloat(item)) && Number.isFinite(item);

/**
 * Check if every item in the array is a number
 *
 * @param numberArray
 * @returns {boolean}
 */
export const isValidArray = (numberArray) => {
  const notNumbers = numberArray.filter(compose(not, isNumber));
  return notNumbers.length === 0;
};

/**
 * Get and parse value from the request
 *
 * @param request
 * @param valuePath
 */
export const getDataFromRequest = (request, valuePath) =>
  JSON.parse(path(
    valuePath,
    request,
  ));
