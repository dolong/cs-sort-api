NodeJS Challenge
=======================

When I started this project, my primary focus was on **simplicity** and **ease of use**.

### Testimonials

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
- [Changelog](#changelog)
- [Additional Ideas](#additional-ideas)

Prerequisites
--------

- Bubble Sort Post Request
- Merge Sort Post Request


Considerations
--------

- A consideration was why we use POST; it is implied that we pass in a array to get an output however traditionally POST requests are used for mainly storing of data. Do we need to store the data in a way? I chose to just use POST to the array only and proceed with an output. My reasoning is because with the arrays having a one to one result, it'd be much faster to just repeatedly use the API to retrieve the output from an array, then to waste time and effort into allocating a database entry for something so trivial.
- Library vs App coded sorting? The sorting algorithms were also coded as functions in the app. I felt it was part of the challenge to code the sorts and learn about them so I figured I would write the functions as a core of the app. I found the node-sort-algorithm on npm and could've used that but I felt it defeated the point.

Getting Started
---------------

The easiest way to get started is to clone the repository:

```
# Get the latest snapshot
git clone myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```

Errors
------------------

- Invalid Object


Project Structure
-----------------


| Name                                    | Description                                                   |
| ----------------------------------      | ------------------------------------------------------------  |
| src\controllers\bubbleSortController.js | Controller for /bubbleSort route                              |
| src\controllers\errorHandler.           | Controller for /errorHandler route                            |
| src\controllers\mergeSortController.js  | Controller for /mergeSort route 	                          |
| src\controllers\sortController.js       | Controller for /getUnsortedNumbers route and body parsing     |
| src\routes\                             | Static assets (fonts, css, js, img).                          |
| src\app.js                              | The main application file.                                    |
| src\constants.js                        | The main application file.                                    |
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
| request                         | Simplified HTTP request library.                                        |
| nodemon                         | Utility for monitoring changes to automatically restart your server.    |


FAQ
---

### Why the folder structure?
[blog] https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/

### Why functional sorts?

Additional Ideas
---------

JWT for authentication. This will allow us to make a safe way to test and structure the payloads of our rest api.



Changelog
---------

You can find the changelog for the project in: [CHANGELOG.md](/blob/master/CHANGELOG.md)

