import errorHandler from '../controllers/errorHandler';
import {
  getDataFromRequest,
  isValidArray,
} from '../utils/utils';
import {
  DEFAULT_CODE_500_MESSAGE,
  NOT_VALID_ARRAY,
} from '../constants';

/**
 * Get and parse the number array from the request
 *
 * @param request
 */
export const getUnsortedNumbers = (request) => {
  try {
    return getDataFromRequest(request, ['body', 'unsortedNumbers']);
  } catch (error) {
    throw error;
  }
};

/**
 * Create controllers to handle sort requests.
 *
 * The returned controller would parse the request body data
 * and call the appropriate sortFunction on it, then the controller
 * sends the appropriate response according to the sortFunction's result.
 *
 * @param request
 * @param response
 */
export const sortControllerCreator = sortFunction => (request, response, next) => {
  try {
    const unsortedNumbers = getUnsortedNumbers(request);

    // Throw error if the array contains non numbers
    if (!isValidArray(unsortedNumbers)) {
      return errorHandler(404, NOT_VALID_ARRAY, next);
    }

    const sortedNumbers = sortFunction(unsortedNumbers);

    // Throw error if no value is returned
    if (!sortedNumbers) {
      return errorHandler(500, DEFAULT_CODE_500_MESSAGE, next);
    }

    return response.status(200).send(sortedNumbers);
  } catch (error) {
    return errorHandler(500, error.message, next);
  }
};
