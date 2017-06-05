var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
  //testing
  this.push(`Copped the data: ${buffer}`);
  next();
}

function end() {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
