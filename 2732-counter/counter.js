/**
 * @param {number} n
 * @return {Function} counter
 */
/**Using the concept of closures 
  -create an Outer function having an Outer variable
  -create an Inner function using the outer variable
  - Key concept: we're still able to access the outer
    Variable variable even though the function has 
    finished executing.

*/
// function outerFunction() {
//   let outerVariable = 'I am outside!';

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// let closure = outerFunction();
// closure(); // Outputs: "I am outside!"

function createCounter(n) {
  let i = 0;
  return () => n + i++;
}
//i=0 10 10+0
//i=1 10  10+1
//1=2 10 10+2 