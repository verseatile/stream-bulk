/* ******

ISSA SERVER USING THE NET MODULE. FULLY FUNCTIONAL.
USE SOCKETS TO CONNECT TO THE SERVER.


****** */

const net = require('net');
const port = 3000;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const server = net.createServer((c) => {

  // 'connection' listener
  //console.log('client connected');


  c.on('end', () => {
    console.log('client disconnected');
  });

  // //this will be sent to the client, on "data"
  // c.write('hello\r\n');
  // c.write('welcome to the server, client\r\n');
  // c.pipe(c); // no idea why c needs to pipe into itself - works without

  //** extra tests - whos connected?

});


server.on('connection', (socket) => {
  console.log('client connected');

  //emits a message to all clients
  socket.write("You're now connected to the server my guy\r\n");

  //test of readline
  rl.on('line', (input) => {
    socket.write(`${input}`)
  });

  //this will be sent to the client, on "data"
  //socket.write('hello\r\n');
  //socket.pipe(c); // no idea why c needs to pipe into itself - works without

  //** returns the number of connected users
  socket.server.getConnections((err, count) => {
    if(err) {
      throw err;
    }
    console.log(`Number of users connected: ${count}`)
  })

  socket.pipe(process.stdout);
  //console.log(`Number of user connected: ${socket.server.connections}`)
});

server.on('listening', () => {

})

server.on('error', (err) => {
  throw err;
});


server.listen(port, () => {
  console.log('server bound, we on ' + port);
});
