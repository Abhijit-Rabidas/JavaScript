const name = "Abhijit"
const repoCount = 50

//  console.log(name + repoCount + " Value"); // outdated

// follow this
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // Called string interpolatiion

// Another way to declare string
const gameName = new String('abhiji_trabi')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12, 6)
console.log(anotherString);

const newStringOne = "    Abhijit     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhijit.live/abhijit%20rabidas"
console.log(url.replace('%20', '-'));
console.log(url.includes('abhi'));
console.log(url.includes('bidyut'));

console.log(gameName.split('_'));
