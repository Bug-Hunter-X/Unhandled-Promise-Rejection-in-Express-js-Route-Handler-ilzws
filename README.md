# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express applications: unhandled promise rejections.  The `bug.js` file contains code that simulates an asynchronous operation within a route handler.  If the operation fails, an error is thrown, but it's not properly caught, leading to an unhandled promise rejection.

The `bugSolution.js` file shows how to fix this by using `try...catch` blocks or `.catch()` method within the asynchronous operation to handle potential errors gracefully.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Make multiple requests to `http://localhost:3000/`.
5. Observe the unhandled promise rejection errors in your console (approximately half the requests will cause this error).

## Solution

The solution involves implementing proper error handling.  Refer to `bugSolution.js` for a corrected version of the code.