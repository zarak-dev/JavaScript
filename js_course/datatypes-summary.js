// Primitive Data Types
// Numbers, Strings, Boolean, Undefined, Null, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const tempOutside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
const ZInt = 83792387478923n
//console.log(id === anotherId);
console.log(typeof ZInt);



// Non Primitive Data Types
// Array , Function, Objects
const family = [ "zarak", "zaryab", "aimmy"];
let myObj = {
    name :  "Zarak",                            //anything inside {} is object wether its variable or number.
    age :  25,
}

const zFunction = function(){
    console.log("Hello World!");                  // all non primitive data types return type are objects 
    
}
 console.log(typeof myObj);
 