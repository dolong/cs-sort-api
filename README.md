
NodeJS Challenge
=======================

A simple assignment

When I started this project, my primary focus was on **completeness** and **best practices**.

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

- [Prerequisites](#prerequisites)
- [Considerations](#considerations)
- [Getting Started](#getting-started)
- [Additional Ideas](#additional-ideas)
- [Test Cases](#Test-Cases)
- [Additional Ideas](#additional-ideas)
- [Bubble Sort Notes](#Bubble-Sort-Notes)
- [Merge Sort Notes](#Merge-Sort-Notes)
- [Benchmarking Ideas](#Benchmarking-Ideas)


Prerequisites
--------

- Bubble Sort Post Request
- Merge Sort Post Request


Considerations
--------

- ***BONUS:*** I completed it with esLint to verify the bonus of running ES6
- BONUS: I have a second branch to compile webpack
- Library vs App coded sorting? The sorting algorithms were also coded as functions in the app. I felt it was part of the challenge to code the sorts and learn about them so I figured I would write the functions as a core of the app. I found the node-sort-algorithm on npm and could've used that but I felt it defeated the point.
- Best practice for NodeJS: I've included es6 linters, mocha for testing, ramda for common functions, and commonly used scripts.


Getting Started
---------------

The easiest way to get started is to clone the repository:

```
# Get the latest snapshot
git clone cs-sort-api

# Change directory
cd cs-sort-api

# Create a log file
echo "" >> cs-sort-api\src\logs.log

# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

Errors
------------------

- 404 - PAGE NOT FOUND 
	- The page you are looking for does not exist.
- 500 - DEFAULT CODE 500 MESSAGE 
	- There is an internal server error processing your request.
- 502 - NOT VALID ARRAY 
 	- The unsortedNumbers array is of incorrect form. All elements should be numbers.



Project Structure
-----------------


| Name                                    | Description                                                   |
| ----------------------------------      | ------------------------------------------------------------  |
| src\controllers\bubbleSortController.js | Controller for /bubbleSort route                              |
| src\controllers\bubbleSortController.spec.js | Test cases for /bubbleSort route                         |
| src\controllers\errorHandler.js           | Controller for /errorHandler route                          |
| src\controllers\mergeSortController.js  | Controller for /mergeSort route 	                            |
| src\controllers\mergeSortController.spec.js | Test cases for /mergeSort route 	                        |
| src\controllers\sortController.js       | Controller for /getUnsortedNumbers route and body parsing     |
| src\controllers\sortController.spec.js  | Test cases for /getUnsortedNumbers route and body parsing     |
| src\routes\index                        | Routes for the Post /bubbleSort /mergeSort                    |
| src\utils\utils.js                      | Utility functions common to both algorithms                   |
| src\app.js                              | The main application file.                                    |
| src\constants.js                        | Defined constants.                                            |
| .eslintrc                               | Rules for eslint linter.                                      |
| .gitignore                              | Folder and files ignored by git.                              |
| package.json                            | NPM dependencies.                                             |
| package-lock.json                       | Contains exact versions of NPM dependencies in package.json.  |


List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| body-parser                     | Node.js body parsing middleware.                                        |
| express                         | Node.js web framework.                                                  |
| ramda                           | Useful functional library.                                              |
| babel-cli                       | Transpiler for JavaScript to turn ES6                                   |
| babel-eslint                    | Linter for ES6                                                          |
| babel-preset-es2015t            | Presets for ES6                                                         |
| errorhandler                    | Development-only error handler middleware.                              |
| eslint                          | Linter JavaScript.                                                      |
| eslint-config-airbnb-base       | Configuration eslint by airbnb.                                         |
| eslint-plugin-import            | ESLint plugin with rules that help validate proper imports.             |
| winston                         | A multi-transport async logging library for node.js.                    |
| mocha                           | Simple, flexible, fun JavaScript test framework for Node.js & The Browser|
| nodemon                         | Utility for monitoring changes to automatically restart your server.    |


Test Cases
--------

For this node project we used Mocha. All the test files are created as *.spec.js 

For the sorts we test

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
	
We also created utils.js for common used functions
- isNumber
	- null
	- empty string
	- letter values
- isValidArray
 	- Arrays 
	- empty array
	- strings
	- null 

Since requirements stated explicitly numeric we went with these edge cases to represent that distinction as well as wrote these last util functions. 

"Please handle any edge cases of both time and space complexity and explain them in a Github README.md as why something is a edge case and how you prepared for it."

Some of the complexity that is important to note are: 

Bubble Sort Notes
-------------	

Bubble Sort isn't a sort that is frequently used in every day execution. Reason being although it is simplistic in code, it runs O(n2). Which is not as streamline as most other sorts. 

Merge Sort Notes
-------------	

Merge sort's worst-case is O(n.log(n)), but in this implementation you need to use additional memory for "left", "right" and "result", not to mention that it’s not ‘in place’. During merging, it creates a copy of the entire array being sorted, which means it copes more than a constant number of elements at some time. Due to this, the space complexity of this algorithm is actually greater than most, and are not commonly used in larger systems where space is at a premium. Some in place sorts include selection sort and insertion sort.
For sure the running time of user defined merge sort in javascript will be slower than Array.prototype.sort which I believe is using QuickSort.

Benchmarking Ideas
---------

I thought of using a charting library like D3 with React to show a real-time representation of the different sorting algorithms in action. I'd imagine there is an edge case with giant arrays that we can really see distinctions.

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




Changelog
---------

You can find the changelog for the project in: [CHANGELOG.md](/blob/master/CHANGELOG.md)

