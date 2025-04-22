// const tinderUser = {} // non-singleton object
const tinderUser = new Object() // singleton object
tinderUser.id = "123abc"
tinderUser.name = "Abhijit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhijit",
            lastname: "Rabidas"
        }
    }

    // regularUser, fullname, userfullname all are objects
}
 
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


// merging/combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2} // object inside object
// const obj3 = Object.assign(obj1, obj2) // here target is obj1 and source is obj2
// const obj3 = Object.assign({}, obj1, obj2, obj4) // here target is {} empty array, values of source copied theer
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// Array of object
const users = [
    {
        id: 1,
        email: "abhi1@gmail.com"

    },
    {
        id: 2,
        email: "abhi2@gmail.com"
    },
    {
        id: 3,
        email: "abhi3@gmail.com"

    },
    {
        id: 4,
        email: "abhi4@gmail.com"

    },

]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring

const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor: "Abhijit"
}

// console.log(course.courseInstructor);
// console.log(course.courseInstructor);
// console.log(course.courseInstructor);

// alter native way to print these three
// const {courseInstructor} = course
// console.log(courseInstructor);

// making the key short
const {courseInstructor: instructor} = course
console.log(instructor);

// json
// {
//     "name": "Abhijit",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]