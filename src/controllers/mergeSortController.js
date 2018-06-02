import { sortControllerCreator } from './sortController';

/**
 * Perform merge sort on the provided unsorted array of numbers
 *
 * @param unsortedNumbers
 * @returns {Promise.<T>}
 */
export const mergeSort = (unsortedNumbers) => {
  const result = unsortedNumbers.map((i => i + 2));
  return result;
};

export const mergeSortController = sortControllerCreator(mergeSort);
