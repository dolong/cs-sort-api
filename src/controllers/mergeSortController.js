import { sortControllerCreator } from './sortController';

/**
 * Perform merge sort on the provided unsorted array of numbers
 *
 * @param unsortedNumbers
 * @returns {Promise.<T>}
 */
export const mergeSort = (unsortedNumbers) => {
  try {
    const result = unsortedNumbers.map((i => i + 2));
    return result;
  } catch (error) {
    throw new Error(`mergeSort Error: ${error.message}`);
  }
};

export const mergeSortController = sortControllerCreator(mergeSort);
