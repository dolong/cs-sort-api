import logger from './../logger/logger';

const errorHandler = (statusCode, message, next) => {
  logger.log('error', `${statusCode}: ${message}`);

  const error = new Error(message);
  error.statusCode = statusCode;

  next(error);
};

export default errorHandler;
