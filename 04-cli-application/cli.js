const readline = require('readline');

const rl = readline.createInterface({
    terminal: true,
    input: process.stdin,
    output: process.stdout,
});

// This is how we read a line at a time from STDIN
// rl.on('line', (line) => {
//     console.log(`Received Line: ${line}`);
// });

rl.question("Should you `Let it go`? ", (answer) => {
    console.log(answer);
    rl.close();
});