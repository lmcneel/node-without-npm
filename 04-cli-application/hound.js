const readline = require('readline');

const rl = readline.createInterface({
    terminal: true,
    input: process.stdin,
    output: process.stdout,
});

const Hound = function Hound(questions=[]) {
    if(!Array.isArray(questions)) throw new Error("Wrong Type: Questions should be an array");
    this.questions = questions;
}

// Walk through all questions
// Get all the answers 
// Return all the answers

Hound.prototype.askQuestion = function askQuestion(question) {
    return new Promise((resolve, reject) => {
        rl.question(`${question} >> `, (answer) => {
            resolve(answer);
        });
    });
}

Hound.prototype.sniff = async function sniff() {
    const answers = [];
    for(const question of this.questions) {
        const answer = await this.askQuestion(question);
        answers.push(answer);
    }

    return answers;
}

Hound.prototype.endSniff = function endSniff() {
    rl.close();
}

module.exports = Hound;
