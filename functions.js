"use strict";
function addData(n1, n2) {
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
// function printResult(num: number): undefined{
//     console.log('Result: ', num)
//     return;
// }
function printResult(num) {
    console.log("Result: ", num);
}
// console.log(printResult(add(5, 12)));
// let combinevalues : Function;
var combinevalues;
combinevalues = addData;
// combinevalues = printResult; -> printResult is a fnc of 1 argument, should be with 2 arguents
// combinevalues = 5; -> error ts it should be a func
console.log("=======>", combinevalues(2, 60));
var combineValue;
// noo error beacuse in definition of callback return type of callback function is void
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log('----->', result);
    return result + 40;
});
