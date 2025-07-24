// Using Fisher-Yates shuffle algorithm
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export function generateRandomSequence(MAX_NUMBER, withOutput) {
  let sequence = [];

  let remainingNumbers = Array.from(
    { length: MAX_NUMBER },
    (_, index) => index + 1
  );

  for (let i = 0; i < MAX_NUMBER; i++) {
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    const randomNumber = remainingNumbers[randomIndex];
    remainingNumbers.splice(randomIndex, 1);
    sequence.push(randomNumber);
  }

  if (withOutput) {
    console.log("\nOriginal sequence:");
    console.log(sequence.toString());
  }

  return sequence;
}
