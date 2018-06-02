import { pathOr } from 'ramda';

export const bubbleSort = (unsortedNumbers) => {
  const result = unsortedNumbers.map((i => i + 1));
  return Promise.resolve(result);
};

export const bubbleSortController = (request, response) => {
  const unsortedNumbers = JSON.parse(pathOr(
    '[]',
    ['body', 'unsortedNumbers'],
    request,g
  ));

  bubbleSort(unsortedNumbers)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(500).send(error));
};
