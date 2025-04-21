/* 1. Primitive

 7 types:
  1. String
  2. Number
  3. Boolean
  4. null
  5. undefined
  6. symbol
  7. BigInt


2. Reference (non-primitive)

  1. Array
  2. Objects
  3. Functions

 */

  // Symbol

const id = Symbol('123')
const anotherId = Symbol('123')
// values are not same
console.log(id === anotherId);

// BigInt
const bigNumber = 33253453458348539534n

// Array, Object, Functions
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Abhijit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof anotherId);
console.log(typeof myFunction);
