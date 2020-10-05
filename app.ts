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

const person : {
    name:string,
    age:26,
    hobbies:string[]
} = {
    name:'Ahmed',
    age:26,
    hobbies:['Travelling','Athletics','Learning Latest Technology']
}
console.log(person.name)

let favouriteActivities : any[];
favouriteActivities = ['Travelling',1,'Learning Latest Technology'];

for(const hobby of person.hobbies){
console.log(hobby.toUpperCase())
}
