process.stdin.setEncoding("utf-8");

process.stdin.on('readable', () => {
    let chunk;

    while((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data : ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('END');
});