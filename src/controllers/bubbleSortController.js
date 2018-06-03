import { sortControllerCreator } from './sortController';

/**
 * Perform bubble sort on the provided unsorted array of numbers
 *
 * @param unsortedNumbers
 * @returns {Promise.<T>}
 */
export const bubbleSort = (unsortedNumbers) => {
  try {
    const result = unsortedNumbers.map((i => i + 1));
    return result;
  } catch (error) {
    throw new Error(`bubbleSort Error: ${error.message}`);
  }
};

export const bubbleSortController = sortControllerCreator(bubbleSort);
