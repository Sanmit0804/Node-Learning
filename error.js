// Error Object

const error = new Error("Something went wrong..!");
// console.log(error);
// throw new Error("I am error object");

const {CustomError} = require('./CustomError')
throw new CustomError("This is our custom error ");


// handle exception using try and catch
