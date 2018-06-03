import { path } from 'ramda';
import errorHandler from '../controllers/errorHandler';
import { DEFAULT_CODE_500_MESSAGE } from '../constants';

/**
 * Get and parse the number array from the request
 *
 * @param request
 */
export const getUnsortedNumbers = (request) => {
  try {
    return JSON.parse(path(
      ['body', 'unsortedNumbers'],
      request,
    ));
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
    const sortedNumbers = sortFunction(unsortedNumbers);

    if (!sortedNumbers) {
      return errorHandler(500, DEFAULT_CODE_500_MESSAGE, next);
    }

    return response.status(200).send(sortedNumbers);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};
