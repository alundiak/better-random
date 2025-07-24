import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generateRandomSequence } from "./betterRandom.js";

// !!!
const MAX_NUMBER = 64;
// !!!

const folderPath = "./files";
if (!existsSync(folderPath)) {
  mkdirSync(folderPath);
}

let sequence = [];
for (let index = 0; index < 1_000_000; index++) {
  sequence = generateRandomSequence(MAX_NUMBER);
  // let sum = sequence.reduce((acc, num) => acc + num, 0);
  // console.log(`Iteration: #${index}: ` + "COUNT: " + sequence.length + ", SUM: " + sum);

  if (index > 0 && index % 100_000 === 0) {
    console.log(`\n${index.toLocaleString()} iterations done...`);
  }
}

const csvContent = sequence.join("\n");
const filePath = join(folderPath, `random_sequence.csv`);
writeFileSync(filePath, csvContent);
