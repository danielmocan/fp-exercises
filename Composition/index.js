// 1. Its easier for us to undestand if the argumets would be applied from left to right, here comes `pipe` to the rescue.
// Please create a pipe function that applies the params received from left to right.

const increment = a => a + 1;
const double = a => a + a;
const square = a => a * a;

const pipe = ( ...functions ) => x => functions.reduce( ( accumulator, current ) => current( accumulator ), x );
const doubleIncrementAndSquare = pipe( double, increment, square );