function addAndMore(x, y) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isNaN(x) || isNaN(y)) reject("ERROR: NOT THE RIGHT VALUES");
            resolve(x + y)
        }, 3000);
    });
}

async function squareResult() {
    try {
        const result = await addAndMore("Happy Feet", 4);
        console.log("Squared Result", result * result);
    } catch(error) {
        console.log(error);
    }
}

squareResult();