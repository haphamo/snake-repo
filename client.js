const net = require('net');

//Establishes connection with the game server
// const stdin = process.stdin;

// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// stdin.on('data', (key) => {
//   if (key === '\u0003') {
//     process.exit();
//   }
// })


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    
  });
  // interpret incoming data as text
  conn.on('connect', () => {
    conn.write('Name: HAA');
    
    
    // setTimeout (() => conn.write ("Move: up"), 100);
    // setTimeout (() => conn.write ("Move: right"), 200);
    // setTimeout (() => conn.write ("Move: down"), 250);
    // setTimeout (() => conn.write ("Move: left"), 250);

  });

  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });
}



module.exports = {
  connect
}