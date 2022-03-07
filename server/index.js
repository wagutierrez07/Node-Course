const http = require('http');

http.createServer(function (req, res) {
    res.write('<h1>mi primer http request</h1>');
    res.end();
}).listen(3000)
