import { sortControllerCreator } from './sortController';

/**
 * Merges two arrays comparing values in a left array to right array
 *
 * @param left
 * @param right
 */
const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

/**
 * Recursively merge sorts two arrays by splitting until length is 1 or less
 * @param inputArray
 */
const mergeSortLocal = (inputArray) => {
  if (inputArray.length < 2) {
    return inputArray;
  }
  const middle = parseInt(inputArray.length / 2, 10);
  const left = inputArray.slice(0, middle);
  const right = inputArray.slice(middle, inputArray.length);

  return merge(mergeSortLocal(left), mergeSortLocal(right));
};

/**
 * Perform merge sort on the provided unsorted array of numbers
 *
 * @param unsortedNumbers
 * @returns {Promise.<T>}
 */
export const mergeSort = (unsortedNumbers) => {
  try {
    const result = mergeSortLocal(unsortedNumbers);
    return result;
  } catch (error) {
    throw new Error(`mergeSort Error: ${error.message}`);
  }
};

export const mergeSortController = sortControllerCreator(mergeSort);
