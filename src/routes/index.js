import express from 'express';

import { bubbleSortController } from '../controllers/bubbleSortController';
import { mergeSortController } from '../controllers/mergeSortController';
import errorHandler from '../controllers/errorHandler';

import { PAGE_NOT_FOUND } from '../constants';

// Create an instance of express Router
const router = express.Router();

// Add home route
router.get('/', (request, response) => {
  response.status(200).json({ message: 'Connected' });
});

// Handle page not found
router.get('*', (response, request, next) => errorHandler(404, PAGE_NOT_FOUND, next));

// Add route to handle bubble sort
router.post('/bubbleSort', bubbleSortController);

// Add route to handle merge sort
router.post('/mergeSort', mergeSortController);

export default router;
