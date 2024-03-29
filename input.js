const handleUserInput = function(data) { 
  if (data === "\u0003") {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput) //handleUserinput is callback function
  return stdin;
}

module.exports = {
  handleUserInput,
  setupInput
}