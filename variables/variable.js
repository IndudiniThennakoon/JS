// ways of variable define in js
// type 01 -> using var keyword
// Declares a variable, optionally initializing it to a value.

// var firstName = "Indu";
// console.log(firstName);

// firstName = "Madhusha";

// for (var i = 0; i < 10; i++) {
//     console.log(firstName);

//     firstName = true;
//     console.log(firstName);
// }

// console.log("After display", firstName);


// JS is a weakly typed language
// 1. Numerical
// • Integers – 1, 2, 3, -56, -135, 3464
// • Floating point/Decimal – 34.46, -65.135
// 2. Strings
// • Single characters – “a”, “b”, “c”, “2”, “7”
// • Multiple characters – “abc”, “12/04/2012”, “34”
// 3. Boolean – true / false
// 4. Null
// 5. Undefined

var number = 10;
var floatingPointNumber = 10.5;
var singleCharacterTypeString = "M";
var multipleCharacterTypeString = "Madhusha";
var booleanTypeVariable = true;
var nullTypeVariable = null;
var undefinedTypeVariable = undefined;
var undefinedTypeVariable2;

console.log(number);
console.log(floatingPointNumber);
console.log(singleCharacterTypeString);
console.log(multipleCharacterTypeString);
console.log(booleanTypeVariable);
console.log(nullTypeVariable);
console.log(undefinedTypeVariable);
console.log(undefinedTypeVariable2);

console.log("=================================================================================");

console.log(typeof (number));
console.log(typeof (floatingPointNumber));
console.log(typeof (singleCharacterTypeString));
console.log(typeof (multipleCharacterTypeString));
console.log(typeof (booleanTypeVariable));
console.log(nullTypeVariable === null);
console.log(typeof (undefinedTypeVariable));
console.log(typeof (undefinedTypeVariable2));

console.log("=================================================================================");

// type 02 -> using let keyword
// Declares a block-scoped, local variable, optionally initializing it to a value.

function display() {
    for (var i = 0; i < 10; i++) {
        let indu = "2000";
        console.log(indu);
    }
}

indu = "1999";

console.log(indu);


// type 03 -> using let keyword
// Declares a block-scoped, read-only named constant.

const testing = "Madhusha";

testing = 456;

