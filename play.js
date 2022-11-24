const { connect } = require('./client');
const { setupInput } = require('./input.js');

console.log('Connecting ...');

conn = connect();

setupInput(conn);