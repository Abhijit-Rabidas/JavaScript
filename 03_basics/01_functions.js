// function defination
function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("J");
    console.log("I");
    console.log("T");
}

// sayMyName() // function call

// -----------------------------------------------------------------
// don't need to specify the datatype of parameters
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);
// --------------------------------------------------------------------
function addTwoNumbers1(number1, number2){
    // let result = number1 + number2
    // return result;  

    return number1 + number2
    console.log("abhijit"); // will not execute
    
}

// const result = addTwoNumbers1(3,5)
// console.log("Result: ", result);

//---------------------------------------------------------------------

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }

    if(!username){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhijit"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage()); // undefined

//----------------------------------------------
// Default value
function loginUserMessage(username = "Abhi"){

    if(!username){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage());

//--------------------------------------------------
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500,2000));

function calculateCartPrice1(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice1(200, 400, 500,2000));
//---------------------------------------------------------

const user = {
    username: "abhijit",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

const user2 = {
    username: "abhijit",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user2)
handleObject({
    username: "sam",
    price: 399
})

//---------------------------------------------------------------------

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 700, 800, 600]));
