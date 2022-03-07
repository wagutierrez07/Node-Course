const fs = require('fs')


console.log();
fs.writeFile('./Texto.txt', 'solo sirve pal porno po wn', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('creado');
})
