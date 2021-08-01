function add(n1: number, n2: number=0): number {
  return n1 + n2;
}

// function printResult(num: number): undefined{
//     console.log('Result: ', num)
//     return;
// }

function printResult(num: number): void {
  console.log("Result: ", num);
}

// console.log(printResult(add(5, 12)));

// let combinevalues : Function;
let combinevalues: (a:number, b:number) => number;

combinevalues = add;
// combinevalues = printResult; -> printResult is a fnc of 1 argument, should be with 2 arguents

// combinevalues = 5; -> error ts it should be a func

console.log("=======>",combinevalues(2,60));

let combineValue;

// noo error beacuse in definition of callback return type of callback function is void

function addAndHandle(n1: number, n2:number, cb:(num: number)=> void){
    const result= n1 +n2;
    cb(result);
    }
    
    addAndHandle(10,20, (result)=>{
        console.log('----->',result)
        return result +40;
    })