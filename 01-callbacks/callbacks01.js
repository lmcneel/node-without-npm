// Playing with async things 

function subtract(x, y) {
    return x - y;
}

// x is int
// y is in
// cb is a function
function addAndMore(x, y, cb) {
    let result; // declaring top level so that I have variable
    console.log("Function", cb);
    console.log("X", x);
    console.log("Y", y);
    // Simulating anything like an API call,
    // a database call, an event listener
    setTimeout(function() {
        console.log("Timeout", cb);
        result = x + y;
        console.log("Result", result);
        cb(result);
    }, 3000); // This simulates a long running process
    console.log("Outside", result);
    return result; // just so I have a variable name to return
}

// We can't return a value from a long running function
const addition = addAndMore(3, 4, function addition1(result) {
    console.log('Checking return values', result);
});

console.log("What is addition?", addition); // Undefined

// Undefined * Undefined = NaN
console.log('********', addition*addition); // NaN

// We can access the end value with a callback
addAndMore(3, 4, function addition2(result) {
    console.log(result*result); // 49
});