module.exports = function generateRandomSequence(MAX_NUMBER) {
    let sequence = [];
    let remainingNumbers = Array.from({ length: MAX_NUMBER }, (_, index) => index + 1);

    for (let i = 0; i < MAX_NUMBER; i++) {
        const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
        const randomNumber = remainingNumbers[randomIndex];
        remainingNumbers.splice(randomIndex, 1);
        sequence.push(randomNumber);
    }

    console.log(sequence.toString());

    return sequence;
}
