// to ways to declare objects -
// 1. literals -> non-singleton
// 2. constructor -> singleton
// Object.create



const mySym  = Symbol("key1")

// object literals
const JsUser = {
    name: "Abhijit", // name is actually treated as "name" string
    "full name": "Abhijit Rabidas",
    // mySym: "mykey1",
    [mySym]: "mykey1", // to use a symbol put inside []
    age: 18,
    location: "Kolkata",
    email: "abhijit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // only syntax to access "full name"
// // console.log(JsUser.mySym);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "abhi@change.com"
// Object.freeze(JsUser) // no changes of object will take place
JsUser.email = "abhi@google.com"
// console.log(JsUser);

// function greeting
JsUser.greeting = function() {
    console.log("Hello Js Users");
    
}

// function greetingTwo
JsUser.greetingTwo = function() {
    console.log(`Hello Js Users, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
