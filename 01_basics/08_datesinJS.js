// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-01-15")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-11-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours());
console.log(newDate.getMinutes());


// ctr+space to see all properties
newDate.toLocaleString('default', {
    weekday: "long"
})