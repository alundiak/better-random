import { generateRandomSequence } from "./betterRandom.js";
// !!!
const MAX_NUMBER = 64;
// !!!

let previousGeneratedSequence = [];

for (let index = 0; index < 1_000_000; index++) {
  let sequence = generateRandomSequence(MAX_NUMBER, true);

  let sum = sequence.reduce((acc, num) => acc + num, 0);

  if (sequence.length != MAX_NUMBER) {
    console.log(`COUNT: ${sequence.length}, SUM: ${sum}`);
    break;
  }

  if (index > 0) {
    const currentSequenceArray = sequence;
    const diffMatrix = [];
    for (let i = 0; i < currentSequenceArray.length; i++) {
      diffMatrix.push(
        Math.abs(currentSequenceArray[i] - previousGeneratedSequence[i])
      );
    }

    console.log("\nNeighboring sequences difference:");
    console.log(diffMatrix.toString());
    // TODO I plan to extend this code with some stats and graphs to visualize difference from Big data results.
  } else {
    previousGeneratedSequence = sequence;
  }
}
