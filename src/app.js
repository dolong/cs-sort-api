import express from 'express';
import bodyParser from 'body-parser';
import { pathOr } from 'ramda';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './../webpack.config';

import router from './routes/index';

import logger from './logger/logger';

import {
  PORT_NUMBER,
  DEFAULT_ERROR_STATUS,
} from './constants';

// Create webpack compiler
const compiler = webpack(webpackConfig);

// Create an instance of express
const app = express();

// Set up port number
const port = process.env.PORT || PORT_NUMBER;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

// Use body parser as middleware to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Added logger middleware
app.use((request, _response, next) => {
  logger.log('info', `${request.method}: ${request.path}`);
  next();
});

// Add router middleware
app.use('/', router);

/*
 * Add middleware to handle errors
 *
 * Prefix _ was used with parameter next to ignore
 * eslint rule no-unused-var
 */
app.use((error, request, response, _next) => {
  // If the error object does not have an httpStatusCode,
  // send default error status
  response
    .status(pathOr(DEFAULT_ERROR_STATUS, ['statusCode'], error))
    .json(pathOr('', ['message'], error));
});

// Set the port number that app will listen for requests
app.listen(
  port,
  () => logger.log('info', `App listening on port ${port}.`),
);
