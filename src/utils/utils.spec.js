import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import {
  isNumber,
  isValidArray,
} from './utils';

let mockArray;
let mockValue;

describe('isNumber', () => {
  it('should return true for value 1', () => {
    mockValue = 1;
    assert(isNumber(mockValue));
  });

  it('should return false for a string', () => {
    mockValue = 'a';
    assert(!isNumber(mockValue));
  });

  it('should return false for an empty string', () => {
    mockValue = '';
    assert(!isNumber(mockValue));
  });

  it('should return false for a null', () => {
    mockValue = null;
    assert(!isNumber(mockValue));
  });

  it('should return false for an array', () => {
    mockArray = [1, 2];
    assert(!isNumber(mockArray));
  });
});

describe('isValidArray', () => {
  it('should return true for an array', () => {
    mockArray = [20, 8, 480, 120, 220, 390, 1000];
    assert(isValidArray(mockArray));
  });

  it('should return true for an empty array', () => {
    mockArray = [];
    assert(isValidArray(mockArray));
  });

  it('should return false for a string', () => {
    mockArray = 'a';
    assert(!isValidArray(mockArray));
  });

  it('should return false for a null', () => {
    mockArray = null;
    assert(!isValidArray(mockArray));
  });
});
