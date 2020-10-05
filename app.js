function add(n1, n2, result, phrase) {
    var resultSum = n1 + n2;
    if (result) {
        console.log(phrase + resultSum);
    }
    else {
        return resultSum;
    }
}
var number1 = 5;
var number2 = 6;
var printResult = true;
var resultPhrase = 'Result is ';
var result = add(number1, number2, printResult, resultPhrase);
var person = {
    name: 'Ahmed',
    age: 26,
    hobbies: ['Travelling', 'Athletics', 'Learning Latest Technology']
};
console.log(person.name);
var favouriteActivities;
favouriteActivities = ['Travelling', 1, 'Learning Latest Technology'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
