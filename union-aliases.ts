const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'arvind', age: 23, hobbies:['Sports', 'Gym'], role:[2, 'author']};

let favouriteActivity : string[];
favouriteActivity = ['Running', 'Gymming'];

// push is an exception in tuple, which is allowed 
person.role.push('Hockey');
person.role= [1, 'Gym'];

//throws error -> not allowed changing type of data in tuple or change of tuple length empty or extra ele, except push method
// person.role = [];
// person.role = [0, 'role', 'Hockey'];

// person.role[1] = 10 
//  -> throws error because tuple have exactly 2 Element, 1st as number, 2nd as string

console.log(person);
/*
ts stores object key and types of types present in object with semicolon, 
person:object not specifying object properties , have to tell ts object object properties
ts auto type inference -> const person: {
    name: string;
    age: number;
    hobbies: string[];
}
person: {} -> ts notation of object type to provide info on structure of object with key: type properties
person.name = 34 -> error ts type inference

tuple restrcts size and type of data an array can contains
*/

console.log(person.name);
// console.log(person.nickName);

for(const hobby of person.hobbies){
    console.log(hobby);
}

// literal type of with specific string value
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(input1 : Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof input1 == "number" && typeof input2 == "number" || resultConversion === 'as-number'){
        result = +input1 + +input2
    }
    else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-text');
console.log(combineStringAges);

const combinedName = combine('Arvind', 'Toretto', 'as-text');
console.log(combinedName);
