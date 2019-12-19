const Hound = require('./hound.js');

const questions = [
    'One question',
    'Two question',
    'Three question',
    'Four question',
];

async function main() {
    const sniffer = new Hound(questions);

    const answers = await sniffer.sniff();

    answers.forEach((answer, i) => {
        console.log(`${questions[i]} answered with ${answer}`);
    });

    sniffer.endSniff();
}

main();
