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
            console.log(false)
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
    console.log(false)

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

// for (let i = lowPoint; i < highPoint; i++) {
//     if(isNotDecrease(i) && containGroupPairDigigts(i)){
//         // console.log('match',i);
//         matchPassword.push(i);
//     }
// }
// console.log('answer', matchPassword.length);


let arr = [
    "10047317060",
"1060399656",
"1032071511",
"1095167658",
"1067599588",
"106869518543459",
"107516435143459",
"107115278343459",
"sCwgH61Kcb",
"eCzms10J7m",
"eCFmDabP6a",
"eCtdHcbIaa",
"eCzdB18T7h"

]

let ownBidRequest = {
    'site':{
        "publisher":{
            "id": "id",
            
        }
    }
}
    if (ownBidRequest['app'] && ownBidRequest['app']['publisher']) {
        if (!(ownBidRequest['app']['publisher']['id'] && ownBidRequest['app']['publisher']['name'])) {
            console.log(false)

        }
    } else if (ownBidRequest['site'] && ownBidRequest['site']['publisher']) {
        if (!(ownBidRequest['site']['publisher']['id'] && ownBidRequest['site']['publisher']['name'])) {
            console.log(false)

        }
    } else console.log(false)


    console.log(true)