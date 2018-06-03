import * as appRootModule from 'app-root-path';

const timeStampFormat = () => (new Date()).toLocaleTimeString();

const winstonConfig = {
  file: {
    level: 'info',
    filename: `${appRootModule.path}/src/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    timestamp: timeStampFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    timestamp: timeStampFormat,
  },
};

export default winstonConfig;
