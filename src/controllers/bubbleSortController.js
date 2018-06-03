import { sortControllerCreator } from './sortController';

const swap = (value1, value2) => [value2, value1];

const bubbleSortLocal = (input) => {
  const arrLen = input.length;
  const outArray = Object.assign([], input);

  for (let index = 0; index < arrLen - 1; index += 1) {
    for (let innerIndex = 0; innerIndex < arrLen - index - 1; innerIndex += 1) {
      if (outArray[innerIndex] > outArray[innerIndex + 1]) {
        [outArray[innerIndex], outArray[innerIndex + 1]] =
          swap(outArray[innerIndex], outArray[innerIndex + 1]);
      }
    }
  }

  return outArray;
};

/**
 * Perform bubble sort on the provided unsorted array of numbers
 *
 * @param unsortedNumbers
 * @returns {Promise.<T>}
 */
export const bubbleSort = (unsortedNumbers) => {
  try {
    const result = bubbleSortLocal(unsortedNumbers);
    return result;
  } catch (error) {
    throw new Error(`bubbleSort Error: ${error.message}`);
  }
};

export const bubbleSortController = sortControllerCreator(bubbleSort);
