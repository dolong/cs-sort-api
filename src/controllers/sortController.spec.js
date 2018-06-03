import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import {
  getUnsortedNumbers,
  sortControllerCreator,
} from './sortController';

let mockRequest;
let mockRequest1;
let mockRequestCreator;

describe('getUnsortedNumbers', () => {
  const normalArray = [2, 1];

  mockRequest = {
    body: {
      unsortedNumbers: JSON.stringify(normalArray),
    },
  };
  it('should return an unsorted array', () => {
    assert.deepEqual(getUnsortedNumbers(mockRequest), normalArray);
  });
});

describe('getUnsortedNumbers', () => {
  mockRequest1 = {
    body: {
      diff: '',
    },
  };
  it('should return an unsorted array', () => {
    assert.throws(getUnsortedNumbers(mockRequest1), Error);
  });
});


describe('getUnsortedNumbers', () => {
  const characterInArray = ['g', 2, 1];
  mockRequestCreator = {
    body: {
      unsortedNumbers: JSON.stringify(characterInArray),
    },
  };

  it('should return an throw an error', () => {
    assert.throws(sortControllerCreator(mockRequestCreator), Error);
  });
});

describe('getUnsortedNumbers', () => {
  const arrayInArray = [
    [1, 2], 3, 7, 25, 12, 9, 8,
  ];
  mockRequestCreator = {
    body: {
      unsortedNumbers: JSON.stringify(arrayInArray),
    },
  };
  it('should return an throw an error', () => {
    assert.throws(sortControllerCreator(mockRequestCreator), Error);
  });
});


describe('getUnsortedNumbers', () => {
  const object = {};
  mockRequestCreator = {
    body: {
      unsortedNumbers: JSON.stringify(object),
    },
  };
  it('should return an throw an error', () => {
    assert.throws(sortControllerCreator(mockRequestCreator), Error);
  });
});
