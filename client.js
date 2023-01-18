const net = require("net");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",//"165.227.47.243",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MMZ");

    // moveUpSnake(conn);

    // slowMove(conn, "up", 50);
    // slowMove(conn, "up", 100);
    // slowMove(conn, "up", 150);
    // slowMove(conn, "left", 150);
    // slowMove(conn, "left", 200);
    // slowMove(conn, "down", 250);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

// const slowMove = (conn, move, time) => {
//   setTimeout(() => {
//     conn.write(`Move: ${move}`);
//   }, time);
// };
// const moveUpSnake = (conn) => {
//   setInterval(() => {
//     conn.write("Move: up");
//   }, 50);
// };


module.exports = { connect };