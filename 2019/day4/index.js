'use strict';
var start = process.hrtime();

var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}
elapsed_time("recieved request");

let lowPoint  = 256310;
let highPoint = 732736;


let isNotDecrease = function(password){
    let array = Array.from(password.toString()).map(Number)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]){
            return false;
        }
    }
    return true
}

let containPairDigigts = function(password){
    let array = Array.from(password.toString()).map(Number)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]){
            return true;
        }
    }
    return false;

}
let matchPassword = []

for (let i = lowPoint; i < highPoint; i++) {
    if(isNotDecrease(i) && containPairDigigts(i)){
        console.log('match',i);
        matchPassword.push(i);
    }
}
console.log('answer', matchPassword.length);
elapsed_time("end request");
