'use strict';

// However, they do remember a few key facts about the password:

//     It is a six-digit number.
//     The value is within the range given in your puzzle input.
//     Two adjacent digits are the same (like 22 in 122345).
//     Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).

// Other than the range rule, the following are true:

//     111111 meets these criteria (double 11, never decreases).
//     223450 does not meet these criteria (decreasing pair of digits 50).
//     123789 does not meet these criteria (no double).

// How many different passwords within the range given in your puzzle input meet these criteria?

// Your puzzle input is 256310-732736.

let lowPoint  = 256310;
let highPonit = 732736;


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

for (let i = lowPoint; i < highPonit; i++) {
    if(isNotDecrease(i) && containPairDigigts(i)){
        console.log('match',i);
        matchPassword.push(i);
    }
}
console.log('answer', matchPassword.length);
