import { pathOr } from 'ramda';

export const mergeSort = (unsortedNumbers) => {
  const result = unsortedNumbers.map((i => i + 2));
  return Promise.resolve(result);
};

export const mergeSortController = (request, response) => {
  const unsortedNumbers = JSON.parse(pathOr(
    '[]',
    ['body', 'unsortedNumbers'],
    request,
  ));

  mergeSort(unsortedNumbers)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(500).send(error));
};
