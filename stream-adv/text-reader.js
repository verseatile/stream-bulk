var fs = require('fs');
var file = process.argv[2];



if(process.argv[2] == undefined) {
  throw "Need a file to move forth"
}
else {
  var readable = fs.createReadStream(file.toString(), 'utf-8')
  readable.pipe(process.stdout);
}
