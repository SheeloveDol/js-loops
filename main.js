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