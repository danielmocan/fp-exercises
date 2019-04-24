// 1. Create a decorator function that catches error in the a function and logs the error to the console (I know its a side effect).
// To make it more interesting lets decorate the function only if the ENV_LOG_ERRORS is true;

import { errorLogging } from "someModule";

const someFunction = () => { //... }
const anotherFunction = () => { //... }

export default {
  someFunction: errorLogging( someFunction ),
  anotherFunction,
};

ENV_LOG_ERRORS = false;
