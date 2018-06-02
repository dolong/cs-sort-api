import { pathOr } from 'ramda';

export const getUnsortedNumbers = (request) => {
  try {
    return JSON.parse(pathOr(
      '[]',
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
export const sortControllerCreator = (sortFunction) => (request, response) => {
  try {
    const unsortedNumbers = getUnsortedNumbers(request);
    const sortedNumbers = sortFunction(unsortedNumbers);

    if (!sortedNumbers) {
      throw new Error('Invalid result from sort function');
    }

    return response.status(200).send(sortedNumbers);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};
