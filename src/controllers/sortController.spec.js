import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

import {
  getUnsortedNumbers,
  sortControllerCreator,
} from './sortController';

let mockRequest;
let mockResponse;
let mockNext;
let mockSortFunction;

describe('getUnsortedNumbers', () => {
  it('should return an unsorted array', () => {
    const normalArray = [2, 1];

    mockRequest = {
      body: {
        unsortedNumbers: JSON.stringify(normalArray),
      },
    };

    assert.deepEqual(getUnsortedNumbers(mockRequest), normalArray);
  });
});

describe('sortControllerCreator', () => {
  beforeEach(() => {
    mockSortFunction = sinon.spy();
    mockNext = sinon.spy();
    mockResponse = {};
  });

  it('should throw an error for array with string', () => {
    const characterInArray = ['g', 2, 1];

    mockRequest = {
      body: {
        unsortedNumbers: JSON.stringify(characterInArray),
      },
    };

    sortControllerCreator(mockSortFunction)(mockRequest, mockResponse, mockNext);

    // mockNext is called in errorHandler
    chai.expect(mockNext.called).to.be.true;
  });

  it('should throw an error for nested array', () => {
    const arrayInArray = [
      [1, 2], 3, 7, 25, 12, 9, 8,
    ];

    mockRequest = {
      body: {
        unsortedNumbers: JSON.stringify(arrayInArray),
      },
    };

    sortControllerCreator(mockSortFunction)(mockRequest, mockResponse, mockNext);

    // mockNext is called in errorHandler
    chai.expect(mockNext.called).to.be.true;
  });

  it('should throw an error for object', () => {
    const object = {};

    mockRequest = {
      body: {
        unsortedNumbers: JSON.stringify(object),
      },
    };

    sortControllerCreator(mockSortFunction)(mockRequest, mockResponse, mockNext);

    // mockNext is called in errorHandler
    chai.expect(mockNext.called).to.be.true;
  });
});
