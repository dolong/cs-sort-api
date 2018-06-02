import { sortControllerCreator } from './sortController';

/**
 * Perform bubble sort on the provided unsorted array of numbers
 *
 * @param unsortedNumbers
 * @returns {Promise.<T>}
 */
export const bubbleSort = (unsortedNumbers) => {
  const result = unsortedNumbers.map((i => i + 1));
  return result;
};

export const bubbleSortController = sortControllerCreator(bubbleSort);
