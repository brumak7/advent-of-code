'use strict'
let http = require('http');
let crid = 'test crid'
    let tmtreq = http.request({
        host: '88.214.206.86',
        port: 8092,
        path: `/toScanCreativesTMT?pwd=snU1eAwE3lKX02Cn&crid=${crid}&pid=18}`
    }, (resp) => {
        let answer = '';
        resp.on('error', (err) => {
            console.error(`tmt request unsuccessful`, err);
        });
        resp.on('data', (chunk) => {
            answer += chunk;
        });
        resp.on('end', (err) => {
            console.log(answer);
        });
    });
    tmtreq.on('error', (e) => {
        console.error(`tmt problem with request: ${e}`);
    });
    tmtreq.end();