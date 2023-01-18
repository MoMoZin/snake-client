const net = require("net");
const { IP, PORT, NAME, ENCODING } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
    conn.write("Say: I'm here to beat yall");
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };