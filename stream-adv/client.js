const net = require('net');
const port = 3000;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var client = net.connect(port, { host: 'localhost' }, () => {
  console.log('SUCCESS...');

  //** send data to the server - WORKS
  //client.write('Just a client sending some data brah\r\n');

  //** line by line, send things to the server
  rl.on('line', (input) => {
    client.write(`${input}\n`)
  });

})



//** listen for data from the server
client.on('data', (data) => {
  console.log(data.toString())
  //client.end();
})

client.on('end', () => {
  console.log('disconnected')
  client.end();
  process.exit();
})
