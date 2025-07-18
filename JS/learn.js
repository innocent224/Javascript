// ===============Assignment===============

const english = 70;
const literature = 50;
const government= 60;
const economics = 80;

let totalpoints = english + literature + government + economics;

let numberofAssignment = 4;

let avargegrade = totalpoints / numberofAssignment;

let isPassing = avargegrade >= 70 ? true : false;

console.log(`English: ${english}, Literature: ${literature}, Government: ${government}, Economics: ${economics} PASSING GRADE:70.`);
console.log(numberofAssignment);
console.log(avargegrade);
console.log(isPassing);