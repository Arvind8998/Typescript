"use strict";
function add(n1, n2, showResult, resultPhrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var number1 = 3;
var number2 = 7.2;
var printRes = true;
var resultPhrase = "Result is : ";
//Type Inference -> Throws error, ts auto detect type of assigned values to variables
// let a : number;
// a = "2";
// let ans = 'String Stored'
// ans = 3;
var res = add(number1, number2, printRes, resultPhrase);
console.log(res);
