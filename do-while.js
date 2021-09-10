//A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);
console.log(' ');


let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded)