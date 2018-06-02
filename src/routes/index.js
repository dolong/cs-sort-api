import express from 'express';
import { bubbleSortController } from '../controllers/bubbleSortController';
import { mergeSortController } from '../controllers/mergeSortController';

const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).json({ message: 'Connected' });
});

router.post('/bubbleSort', bubbleSortController);

router.post('/mergeSort', mergeSortController);

export default router;
