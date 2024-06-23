/**
 * @param {number[]} array
 * @param {Function} fun
 * @return {number[]}
 */
var map = function(array, fun) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fun(array[i], i));
    }
    return newArray
};