import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

// Create an instance of express
const app = express();

// Set up port number
const PORT_NUMBER = 3000;
const port = process.env.PORT || PORT_NUMBER;

// Use body parser as middleware to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add router middleware
app.use('/', router);

// todo - Add middleware to handle errors

/* eslint-disable no-console */
// Set the port number that app will listen for requests
app.listen(port, () => console.log(`App listening on port ${port}.`));
