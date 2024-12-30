// Error Object

// const error = new Error("Something went wrong..!");
// console.log(error);
// throw new Error("I am error object");

const { CustomError } = require("./CustomError");
// throw new CustomError("This is our custom error ");

// handle exception using try and catch
// try{
//     doSomething();
// } catch(e){
//     console.log("Error occured: ", e);
// }

// function doSomething() {
//   const data = fetch("localhost:3000/api");
// }

// Uncaught exception
// process.on("uncaughtException", (err) => {
//   console.log("There was an uncaught exception", err);
//   process.exit(1);
// });

// doSomething();

// Exception with promises

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise.then((val) => {
//   console.log(val);
// });

// Exception with Async and Await
// function doSomething() {
//   console.log("This is do something function");
// }

// const someFunction = async () => {
//   try {
//     await doSomething();
//   } catch (error) {
//     throw new CustomError(error.message);
//   }
// };

// someFunction();
