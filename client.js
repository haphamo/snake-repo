const net = require('net');

//Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
    
  });
  // interpret incoming data as text

  //Send the string "Name: ___" to the server, upon connection

  conn.on('connect', () => {
    conn.write('Name: HAA');
  });
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });
}

module.exports = {
  connect
}