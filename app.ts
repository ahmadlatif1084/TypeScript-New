function add(n1:number,n2:number,result:boolean,phrase:string){
    const resultSum = n1 + n2;
    if(result){
        console.log(phrase + resultSum)
    }else{
        return resultSum;
    }
}
const number1=5;
const number2=6;
const printResult = true;
const resultPhrase = 'Result is ';

const result = add(number1,number2,printResult,resultPhrase)
enum Role { Admin = 5, User = 6, Author = 10 }
const person : {
    name:string,
    age:26,
    hobbies:string[]
    roleTuple:[number,string],
    roleEnum:Role
} = {
    name:'Ahmed',
    age:26,
    hobbies:['Travelling','Athletics','Learning Latest Technology'],
    roleTuple:[2,'author'],
    roleEnum:Role.Admin
}
console.log(person.name)

let favouriteActivities : any[];
favouriteActivities = ['Travelling',1,'Learning Latest Technology'];

for(const hobby of person.hobbies){
console.log(hobby.toUpperCase())
}

//  Union Types

function union(n1:number | string, n2:number | string){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1 + n2;
    }else{
       result = n1.toString() + n2.toString()
    }
    return result
}

const unionTypes1 = union(10,5)
const unionTypes2 = union("Ahmed","latif")


// Type Aliases

type Combinable = number | string;
type ConversionDescriptor =  'as-number' | 'as-text'

//  Literal Types

function unionLiteral(n1:Combinable, n2: Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === "as-number"){
        result = +n1 + +n2;
    }else{
       result = n1.toString() + n2.toString()
    }
    return result;
}

const unionLiteral1 = unionLiteral("10","5","as-number")
const unionLiteral3 = unionLiteral(10,5,"as-number")
const unionLiteral2 = unionLiteral("Ahmed","latif","as-text")


//  Function Return Types & Void

function add1(n1:number,n2:number){
    return n1 + n2;
}
function printResult1(num:number):void{
    console.log('Result: ' +num)
}
printResult1(add1(5,10))

//  Function Types

// let CombineValues: Function;
let CombineValues: (a:number,b:number) => number
CombineValues = add1;
// CombineValues = printResult
// CombineValues = 5;
console.log(CombineValues(8,8))

// Function Types & Callbacks

function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
    const result = n1 + n2
    cb(result)
}

addAndHandle(10,15,(result =>{
    console.log(result)
}))


