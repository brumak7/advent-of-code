'use strict';

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
let containGroupPairDigigts = function(password){
    
    let array = Array.from(password.toString()).map(Number)
    let buffer = array[0];
    let matches = [];
    let pairsCount = 1;
    for (let i = 1; i <= array.length; i++) {
        if(array[i] == buffer){
            pairsCount++;
        }else{
            matches.push(pairsCount)
            pairsCount = 1;
        }
        buffer = array[i];
    }
    return matches.includes(2);
}

let matchPassword = []

for (let i = lowPoint; i < highPonit; i++) {
    if(isNotDecrease(i) && containGroupPairDigigts(i)){
        // console.log('match',i);
        matchPassword.push(i);
    }
}
console.log('answer', matchPassword.length);
