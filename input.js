const { MOVEMENT_KEYS, ENCODING, EXIT_KEY } = require('./constants');

// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  // your code here
  if (key === EXIT_KEY) {
    process.exit();
  }

  const currentMove = MOVEMENT_KEYS[key.toLowerCase()];
  if (currentMove) {
    connection.write(currentMove);
  }
};


// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };