// Writing a for loop that counts from 5 to 10

for (let i = 5; i < 11; i++) {
  console.log(i);
}
console.log('');

// writing a loop that runs backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
console.log('');


// Prefixing each array item with 'I would love to visit'
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Nested loop to compare 2 arrays and log mutual items between them
const bobsFollowers = ['Ryan', 'James', 'Carvill', 'Elliot'];
const tinasFollowers = ['Julie', 'Ryan', 'Elliot'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers)
console.log('')



// WHALE SPEAK

// Creating variable to store a phrase
const input = "I absolutely love coding";
// Creating array of vowels
let vowels = ['a', 'e', 'o', 'u', 'i'];
// Creating empty result array
let resultArray = [];


// Turning input into an array
const inputArr = input.split('');
// Iterating through 'input'
for (let i = 0; i < inputArr.length; i++) {
  //  console.log(i)
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j)
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (inputArr[i] === 'e' || inputArr[i] === 'u') {
    resultArray.push(inputArr[i])
  };
}


console.log(resultArray.join('').toUpperCase())
