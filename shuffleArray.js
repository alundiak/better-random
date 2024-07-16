// Function to shuffle an array using the Fisher-Yates (Knuth) shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Existing sequence of random numbers
let sequence = [
  5, 45, 4, 20, 15, 14, 34, 46, 25, 16, 19, 23, 37, 8, 31, 3, 47, 6, 42, 43, 36, 10, 17, 33, 12, 7, 48, 27, 44, 21, 2, 1, 24, 13, 29, 41, 18, 32, 40, 35, 9, 26, 28, 22, 49, 38, 11, 39, 30
];

console.log('Original: ', sequence);


// Shuffle the sequence
let shuffledSequence = shuffleArray(sequence);
console.log('shuffledSequence: ', shuffledSequence);
console.log('diff: ',);

let sum = shuffledSequence.reduce((acc, num) => acc + num, 0);
console.log("COUNT:", shuffledSequence.length);
console.log("SUM:", sum);
