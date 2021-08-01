"use strict";
// let userInput: unknown;
// let userName: string
// userInput = 6;
// userInput ='arvind'
// userName = userInput;
// let userInput: any;
// let userName: string
// userInput = 6;
// userInput ='arvind'
// userName = userInput;
var userInput;
var userName;
userInput = 6;
userInput = "arvind";
//userName is guranteed string, unknown is better than any because we have to check the type of unknown before assigning a nknown type var data in some other variable
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //   while(true){}
}
try {
    var res_1 = generateError("An error occured", 500);
}
catch (e) {
    console.log(e);
}
