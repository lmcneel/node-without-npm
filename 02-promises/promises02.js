const test = require('./promises01.js');

test.then(function(result) {
    console.log("PROMISES Export", result*result);
}).catch(function(error) {
    console.log("TEST", error);
});