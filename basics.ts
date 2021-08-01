function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    const result = n1 + n2
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

const number1 = 3;
const number2 = 7.2;
const printRes = true;
const resultPhrase= "Result is : "

//Type Inference -> Throws error, ts auto detect type of assigned values to variables

// let a : number;
// a = "2";

// let ans = 'String Stored'
// ans = 3;



const res = add(number1, number2, printRes, resultPhrase);
console.log(res);
