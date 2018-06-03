import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import {
  mergeSort,
  mergeSortLocal,
  merge,
} from './mergeSortController';

let mockArray;
let mockArrayMerge;

describe('mergeSort', () => {
  it('should return the sorted array', () => {
    mockArray = [1, 2];
    assert.deepEqual(mergeSort(mockArray), [1, 2]);
  });
});

describe('mergeSortLocal', () => {
  it('should return a sorted array', () => {
    mockArray = [20, 8, 480, 120, 220, 390, 1000];
    const normalResult = [8, 20, 120, 220, 390, 480, 1000];
    assert.deepEqual(mergeSortLocal(mockArray), normalResult);
  });

  it('should return a sorted array with one element', () => {
    mockArray = [1];
    assert.deepEqual(mergeSortLocal(mockArray), mockArray);
  });

  it('should return a sorted array with a negative number', () => {
    mockArray = [1120, 800, 480, -120, 20, 390, 1000];
    const negativeResult = [-120, 20, 390, 480, 800, 1000, 1120];
    assert.deepEqual(mergeSortLocal(mockArray), negativeResult);
  });

  it('should return an empty array', () => {
    mockArray = [];
    assert.deepEqual(mergeSortLocal(mockArray), mockArray);
  });

  it('should return the same array', () => {
    mockArray = [1, 1, 1, 1, 1];
    assert.deepEqual(mergeSortLocal(mockArray), mockArray);
  });
});

describe('merge', () => {
  it('should return the merged array', () => {
    mockArray = [1, 1, 1, 1, 1];
    mockArrayMerge = [2];
    assert.deepEqual(merge(mockArray, mockArrayMerge), [1, 1, 1, 1, 1, 2]);
  });

  it('should return the merged array with negative', () => {
    mockArray = [1, 1, 1, 1, 1];
    mockArrayMerge = [-1];
    assert.deepEqual(merge(mockArray, mockArrayMerge), [-1, 1, 1, 1, 1, 1]);
  });

  it('should return the merged array with empty right', () => {
    mockArray = [1, 1, 1, 1, 1];
    mockArrayMerge = [];
    assert.deepEqual(merge(mockArray, mockArrayMerge), [1, 1, 1, 1, 1]);
  });

  it('should return the merged array with empty left', () => {
    mockArray = [];
    mockArrayMerge = [1];
    assert.deepEqual(merge(mockArray, mockArrayMerge), [1]);
  });
});
