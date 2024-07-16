const fs = require('fs');
const path = require('path');
const generateRandomSequence = require('./better');

// !!!
const MAX_NUMBER = 64;
// !!!

const folderPath = './files';
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

let sequence = [];
for (let index = 0; index < 1_000_000; index++) {
  sequence = generateRandomSequence(MAX_NUMBER);
  // let sum = sequence.reduce((acc, num) => acc + num, 0);
  // console.log(`Iteration: #${index}: ` + "COUNT: " + sequence.length + ", SUM: " + sum);
}

const csvContent = sequence.join('\n');
const filePath = path.join(folderPath, `random_sequence.csv`);
fs.writeFileSync(filePath, csvContent);
