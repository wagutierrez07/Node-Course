const os = require('os');
//const server = require('server');

console.log(os.release())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os.version())

console.log('Free memory: ', os.freemem(), 'bytes')
console.log('Total memory: ', os.totalmem(), 'bytes')
