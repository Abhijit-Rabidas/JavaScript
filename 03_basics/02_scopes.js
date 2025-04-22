//global scope

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

//---------------------------------------------
// var c = 300

if (true) {
    // block scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // out of scope
// console.log(b); // out of scope
// console.log(c); // 30

//-----------------------------------------------

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);

}

// console.log(a);

// --------------------------------------------------------

// nested scope

function one() {
    const username = "abhijit"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

// -------------------------------------------------------

if (true) {
    const username = "abhijit"
    if (username === "abhijit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error

}
// console.log(username); // error

// ------------------------------------------
// interesting

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

// addOne(5)


// addTwo(5) // error
const addTwo = function (num) {
    return num + 2
}

// addTwo(5)

//------------------------------------------------