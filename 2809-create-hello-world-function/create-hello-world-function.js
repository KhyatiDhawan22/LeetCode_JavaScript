/**
 * @return {Function}
 */
/**The One liner way is to use an arrow function */
const createHelloWorld = () => () => "Hello World";

/**The other way */
function createHelloWorldd(){
    return function(){ return "Hello World"}
}
