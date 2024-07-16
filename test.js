const generateRandomSequence = require('./better');
const n = 52;

let previousGeneratedSequence = [];

for (let index = 0; index < 10000; index++) {
  let sequence = generateRandomSequence();

  let sum = sequence.reduce((acc, num) => acc + num, 0);

  if (sequence.length != n || sum !== 1378) {
    console.log(`COUNT: ${sequence.length}, SUM: ${sum}`)
    break;
  }

  if (index > 0) {
    const currentSequenceArray = sequence;
    const diffMatrix = [];
    for (let i = 0; i < currentSequenceArray.length; i++) {
      diffMatrix.push(Math.abs(currentSequenceArray[i] - previousGeneratedSequence[i]));
    }

    console.log('Neighboring sequences difference: ', diffMatrix.toString());
  } else {
    previousGeneratedSequence = sequence;
  }

}
