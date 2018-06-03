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
});

describe('isNumber', () => {
  it('should return false for a letter', () => {
    mockValue = 'a';
    assert(!isNumber(mockValue));
  });
});

describe('isNumber', () => {
  it('should return false for a blank', () => {
    mockValue = '';
    assert(!isNumber(mockValue));
  });
});

describe('isNumber', () => {
  it('should return false for a null', () => {
    mockValue = null;
    assert(!isNumber(mockValue));
  });
});

describe('isNumber', () => {
  it('should return false for a array', () => {
    mockArray = [1, 2];
    assert(!isNumber(mockArray));
  });
});

describe('isValidArray', () => {
  it('should return a true for a array', () => {
    mockArray = [20, 8, 480, 120, 220, 390, 1000];
    assert(isValidArray(mockArray));
  });
});

describe('isValidArray', () => {
  it('should return a true for empty array', () => {
    mockArray = [];
    assert(isValidArray(mockArray));
  });
});

describe('isValidArray', () => {
  it('should return a false for a character', () => {
    mockArray = 'a';
    assert(!isValidArray(mockArray));
  });
});

describe('isValidArray', () => {
  it('should return a true for a null', () => {
    mockArray = null;
    assert(!isValidArray(mockArray));
  });
});
