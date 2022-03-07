const express = require('express');

const server = express();

const colors = require('colors');

server.listen(3000, function () {
  console.log('server on port 3000'.red);
})
server.get('/', function (req, res) {
  res.send('<h1>Hola</h1>')
})
