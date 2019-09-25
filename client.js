const net = require('net');

//Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    
  });
  // interpret incoming data as text

  //Send the string "Name: ___" to the server, upon connection

  conn.on('connect', () => {
    conn.write('Name: HAA');
    //setInterval(function(){ alert("Hello"); }, 3000);
    setInterval (() => conn.write ("Move: up"), 100);
    setInterval (() => conn.write ("Move: right"), 200);
    setInterval (() => conn.write ("Move: left"), 250);

  });


  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });
}



module.exports = {
  connect
}