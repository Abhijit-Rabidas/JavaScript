const user = {
    username: "abhijit",
    price: 999,

    // this -> current context
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node environment this points empty object {}, but in browser in points window

// -----------------------------------------------------------------
/*
function chai(){
    let username = "abhijit"
    console.log(this.username); // not work inside function // undefined
    
}
chai()
*/
// ---------------------------------------------------------------

/*
const chai = function (){
    let username = "abhijit"
    console.log(this.username); // undefined
}

chai()
*/

/*
const chai = () => {
    let username = "abhijit"
    console.log(this.username); // undefined
}

chai()
*/

/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));
*/

/*
// -----------impicit return--------

// const addTwo = (num1, num2) => num1 + num2
/// or,
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));

// inside curly braces {} need to use return, but inside () no need
*/

const func = () => ({username: "abhijit"}) // to return object, need to enclose inside ()
console.log(func());

