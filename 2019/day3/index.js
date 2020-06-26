'use strict';

const fs = require('fs');
const readLine = require('readline');
let result = 0

let rl = readLine.createInterface({
    input: fs.createReadStream('./input')
});

rl.on('line', function (line) {
    
});
rl.on('close', function (line) {
    console.log('end result', result);
});
