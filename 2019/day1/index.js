'use strict';

const fs = require('fs');
const readLine = require('readline');

let result = 0

let rl = readLine.createInterface({
    input: fs.createReadStream('./input')
});

rl.on('line', function (line) {
    let mass = parseInt(line);
    let fuel =  (Math.floor(mass/3)) - 2
    result += fuel;
});
rl.on('close', function (line) {
    console.log('end result', result);
});
