const spellingWord = 'hippopotamus';

// Write your code below
for (const letter of spellingWord) {
  console.log(letter);
}

console.log('');



const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (const pokemon of pokemonList) {
  if (pokemon === 'Yoshi') {
    continue;
  }
  console.log(`You Caught a ${pokemon}!`);
  
}