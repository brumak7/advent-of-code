'use strict';

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
