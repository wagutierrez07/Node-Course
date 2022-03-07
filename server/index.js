const http = require('http');
const colors = require('colors');
/*
http.createServer(function (req, res) {
    res.write('<h1>mi primer http request</h1>');
    res.end();
}).listen(3000);
*/
/*
const handleServer = function (req, res) {
    res.write('<h1>mi primer http request</h1>');
    res.end();
}

http.createServer(handleServer).listen(3000)
*/
const handleServer = function (req, res) {
    res.write('<h1>mi primer http request</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000,function () {
  console.log('server on port 3000'.yellow);
})
