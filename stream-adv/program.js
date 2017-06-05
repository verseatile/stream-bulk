var http = require('http');
var fs = require('fs');

var through = require('through2');
var stream = through(write, end);

let file = fs.createReadStream('data.txt', 'utf-8')

function write(buffer, encoding, next) {
  //testing
  //this.push(`${buffer.toString().toUpperCase()}`);
  this.push(`${file.toString().toUpperCase()}`);
  next();
}

function end() {
  console.log('complete')
}



var server = http.createServer(function (req, res) {
    //fs.createReadStream('data.txt', 'utf-8').pipe(res);
    res.write(file)
});


server.listen(process.argv[2]);
