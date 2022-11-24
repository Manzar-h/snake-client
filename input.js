
const
  {  UPKEY,
    LEFTKEY,
    DOWNKEY,
    RIGHTKEY} = require('./constants');

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
  if (key === 'w') {
    connection.write(UPKEY);
  }
  if (key === 'a') {
    connection.write(LEFTKEY);
  }
  if (key === 's') {
    connection.write(DOWNKEY);
  }
  if (key === 'd') {
    connection.write(RIGHTKEY);
  }
  if (key === "h") {
    connection.write("Say: hello");
  }
  if (key === "j") {
    connection.write("Say: stay");
  }
  if (key === 'k') {
    connection.write("Say: listen");
  }
};

module.exports = {
  setupInput
};