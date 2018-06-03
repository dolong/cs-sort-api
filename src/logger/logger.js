import * as winston from 'winston';
import winstonLogger from './winstonConfig';

const logger = new (winston.Logger)({
  transports: [
    new winston.transports.File(winstonLogger.file),
    new winston.transports.Console(winstonLogger.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

export default logger;
