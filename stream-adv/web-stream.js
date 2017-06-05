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



const server = net.createServer((socket) => {

  // 'connection' listener
  //console.log('client connected');


  socket.on('end', () => {
    console.log('client disconnected');
  });

  // //this will be sent to the client, on "data"
  // c.write('hello\r\n');
  // c.write('welcome to the server, client\r\n');
  // c.pipe(c); // no idea why c needs to pipe into itself - works without

  //** extra tests - whos connected?

});


server.on('connection', (socket) => {
  //console.log('client connected');

  //emits a message to all clients
  socket.write("You're now connected to the server my guy\r\n");

  //test of readline -- works. input is also stdin
  rl.on('line', (input) => {
    socket.write(`${input}`)
  });

  //causing doubles for some reason -- INVESTIGATE
  //socket.pipe(socket)

  //this will be sent to the client, on "data"
  //socket.write('hello\r\n');
  //socket.pipe(c); // no idea why c needs to pipe into itself - works without

  //** returns the number of connected users
  socket.server.getConnections((err, count) => {
    if(err) {
      throw err;
    }
    console.log(`\nNumber of users connected: ${count}\n`)
  })

  //** pipe the stream of the socket to the destination of stdout
  //** to see the information/msgs on the server, you must pipe the content
  //** of the stream coming in from the clients into the stdout of the server
  socket.pipe(process.stdout);

});

server.on('listening', () => {

})

server.on('error', (err) => {
  throw err;
});


server.listen(port, () => {
  console.log(`server bound, we on ${port} \n`);
});
