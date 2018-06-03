import express from 'express';
import bodyParser from 'body-parser';
import { pathOr } from 'ramda';

import router from './routes/index';

import {
  PORT_NUMBER,
  DEFAULT_ERROR_STATUS,
} from './constants';

// Create an instance of express
const app = express();

// Set up port number
const port = process.env.PORT || PORT_NUMBER;

// Use body parser as middleware to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add router middleware
app.use('/', router);

/*
 * Add middleware to handle errors
 *
 * Prefix _ was used with parameter next to ignore
 * eslint rule no-unused-var
 */
app.use((error, request, response, _next) => {
  // todo - log the error...
  // If the error object does not have an httpStatusCode,
  // send default error status
  response
    .status(pathOr(DEFAULT_ERROR_STATUS, ['statusCode'], error))
    .send(pathOr('', ['message'], error));
});

/* eslint-disable no-console */
// Set the port number that app will listen for requests
app.listen(port, () => console.log(`App listening on port ${port}.`));
