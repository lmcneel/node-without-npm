// Promises
function addAndMore(x, y) {
    const result = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isNaN(x)) {
                reject("ERROR: X should be a number");
            }

            if(isNaN(y)) {
                reject("ERROR: Y should be a number");
            }

            resolve(x+y);
        }, 3000);
    });
    return result;
}

// This is exported
const test = addAndMore("Happy Holidays", 4); 

 // This shows what is exported
console.log(test);

addAndMore(3,"Olaf").then(function(result) {
    console.log("Result Squared", result*result);
}).catch(function(error) {
    console.log("add and more error", error);
});


module.exports = test;