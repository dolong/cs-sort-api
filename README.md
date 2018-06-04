
NodeJS Challenge
=======================

### Assignment

>Summary
>Create a carefully designed API in nodejs with endpoints:

>POST /bubbleSort
>This endpoint will take in an array of numbers and rearrange them using the bubble sort algorithm

>POST /mergeSort
>This endpoint will take in an array of numbers and rearrange them using the merge sort algorithm

>Both endpoints should take only one parameter: an array of numbers called “unsortedNumbers”

>Please take into account API design, error handling, and any other best practices.
>Edge cases
>Please handle any edge cases of both time and space complexity and explain them in a Github README.md as why something is a edge case and how you prepared for it.

>Bonus
>Make your node project run with webpack and write your API in ES6
>Upon completion
>After you are done with your project please upload it to Github with an updated README.md talking about the overall design approach you took with your API, how you handle edge cases, and how you handle errors.


Table of Contents
-----------------

- [Routes](#routes)
- [Considerations](#considerations)
- [Getting Started](#getting-started)
- [Test Cases](#test-cases)
- [Bubble Sort Notes on Complexity](#bubble-sort-notes-on-complexity)
- [Merge Sort Notes on Complexity](#merge-sort-notes-on-complexity)
- [Benchmarking Ideas](#benchmarking-ideas)


Routes
--------

- /bubbleSort: Bubble Sort Post Request
- /mergeSort: Merge Sort Post Request


Considerations
--------

- ***BONUS:*** I used ES6 and added esLint to check the code
- ***BONUS:*** I have a [second branch](https://github.com/dolong/cs-sort-api/tree/BONUS/Webpack), that uses Webpack to create a bundle `app.bundle.js`.
  - When switch branches make sure you run `rm -rf node_modules/ && npm install`
  - To build and run the server on this branch, use: `npm start`
  - The current Webpack configuration is currently on `development` mode only.
- Best practice for NodeJS: I've included eslint, mocha and chai for testing, babel for compiling ES6, webpack for bundling and ramda for utility functions.
- I've also included a logging module. See below for the creation of the log file. Logs are created with Winston but will throw an error if you don't create it first.

Getting Started
---------------

The easiest way to get started is to clone the repository:

```
# Get the latest snapshot
git clone https://github.com/dolong/cs-sort-api.git

# Change directory
cd cs-sort-api

# Create a log file at src/logs/app.log

# Remove NPM dependencies (if you are switching between two branches)
rm -rf node_modules/

# Install NPM dependencies
npm install

# Then simply start the app. This command also build the bundle in BONUS/Webpack branch.
npm start
```

Project Structure
-----------------


| Name                                    | Description                                                   |
| ----------------------------------      | ------------------------------------------------------------  |
| src\controllers\bubbleSortController.js | Controller for /bubbleSort route                              |
| src\controllers\bubbleSortController.spec.js | Unit tests for /bubbleSort route                         |
| src\controllers\errorHandler.js           | Controller to handle error                          |
| src\controllers\mergeSortController.js  | Controller for /mergeSort route 	                            |
| src\controllers\mergeSortController.spec.js | Unit tests for /mergeSort route 	                        |
| src\controllers\sortController.js       | Controller for /getUnsortedNumbers route and request parsing     |
| src\controllers\sortController.spec.js  | Unit tests for /getUnsortedNumbers route and request parsing     |
| src\logger\logger.js                    | Logging module                   |
| src\logger\winstonConfig.js             | Winston config file for logging                    |
| src\routes\index                        | Router                    |
| src\utils\utils.js                      | Utility functions                   |
| src\utils\utils.spec.js                 | Unit tests for utility functions                   |
| src\app.js                              | The main application file                                    |
| src\constants.js                        | Defined constants                                            |
| .eslintrc                               | Rules for eslint linter                                      |
| .eslintignore                           | Folder and files ignored by eslint                           |
| .gitignore                              | Folder and files ignored by git                              |
| webpack.config.js                       | (Only on BONUS/Webpack branch) Webpack configuration         |
| package.json                            | NPM dependencies                                             |
| package-lock.json                       | Contains exact versions of NPM dependencies in package.json  |


**Swagger API Mock Up**
https://app.swaggerhub.com/apis/dolong/csmart/1.0.0#/

Error Messages
------------------

- 404 - PAGE NOT FOUND
  - The page you are looking for does not exist.
- 500 - DEFAULT CODE 500 MESSAGE
	- There is an internal server error processing your request.
- 502 - NOT VALID ARRAY
 	- The unsortedNumbers array is of incorrect form. All elements should be numbers.

Test Cases
--------

For testing this node project, I used Mocha and Chai. All the test files are created as `*.spec.js`

**RUN WITH**
```
npm run test
```
For the sorts, I test

- Empty input
- 1 element input
- Duplicate elements
- Collection with all elements equal

The inner functions were also tested
- swap
	- Swap two of the same value
	- Swap two different values
- merge
	- Merge two arrays

I also created utils.js for common used functions
- isNumber
	- null
	- empty string
	- letter values
- isValidArray
 	- Arrays
	- empty array
	- strings
	- null

Since requirements stated explicitly numeric array, I went with these edge cases to represent that distinction as well as wrote these last util functions.


Bubble Sort Notes on Complexity
-------------

Bubble Sort isn't a sort that is frequently used in every day execution. Reason being although it is simplistic in code, it runs O(n2). Which is not as streamline as most other sorts.

Merge Sort Notes on Complexity
-------------

Merge sort's worst-case is O(n.log(n)), but in this implementation you need to use additional memory for "left", "right" and "result", not to mention that it’s not ‘in place’. During merging, it creates a copy of the entire array being sorted, which means it copes more than a constant number of elements at some time. Due to this, the space complexity of this algorithm is actually greater than most, and are not commonly used in larger systems where space is at a premium. Some in place sorts include selection sort and insertion sort.
For sure the running time of user defined merge sort in javascript will be slower than Array.prototype.sort which I believe is using QuickSort.

Benchmarking Ideas
---------

I thought of using a charting library like D3 with React to show a real-time representation of the different sorting algorithms in action. I'd imagine there is an edge case with giant arrays that I can really see distinctions.

I also found another guide from https://www.npmjs.com/package/fast-sort where the sort was benchmarked through the js-flock lib
```
Running benchmark
To run benchmark on your PC follow steps from below

git clone https://github.com/snovakovic/js-flock.git
cd js-flock
npm install
npm run benchmark:sort
In case you notice any irregularities in benchmark or you want to add sort library to benchmark score please open issue here
```


Other Impelmentation Ideas
------------------

JWT for authentication. This will allow us to make a safe way to test and structure the payloads of our rest api.

\