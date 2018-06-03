import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import {
  bubbleSort,
  bubbleSortLocal,
  swap,
} from './bubbleSortController';

let mockArray;

describe('bubbleSort', () => {
  it('should return the sorted array', () => {
    mockArray = [1, 2];
    assert.deepEqual(bubbleSort(mockArray), [1, 2]);
  });
});

describe('bubbleSortLocal', () => {
  it('should return a sorted array', () => {
    mockArray = [20, 8, 480, 120, 220, 390, 1000];
    const normalResult = [8, 20, 120, 220, 390, 480, 1000];
    assert.deepEqual(bubbleSortLocal(mockArray), normalResult);
  });

  it('should return a sorted array with one element', () => {
    mockArray = [1];
    assert.deepEqual(bubbleSortLocal(mockArray), mockArray);
  });

  it('should return a sorted array with a negative number', () => {
    mockArray = [1120, 800, 480, -120, 20, 390, 1000];
    const negativeResult = [-120, 20, 390, 480, 800, 1000, 1120];
    assert.deepEqual(bubbleSortLocal(mockArray), negativeResult);
  });

  it('should return a empty array', () => {
    mockArray = [];
    assert.deepEqual(bubbleSortLocal(mockArray), mockArray);
  });

  it('should return the same array', () => {
    mockArray = [1, 1, 1, 1, 1];
    assert.deepEqual(bubbleSortLocal(mockArray), mockArray);
  });
});

describe('swap', () => {
  it('should return the swapped array for palindrome array', () => {
    assert.deepEqual(swap(1, 1), [1, 1]);
  });

  it('should return the swapped array', () => {
    assert.deepEqual(swap(1, 2), [2, 1]);
  });
});
