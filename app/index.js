const letc = require('letc');
const letcPG = require('letc-pg');
const config = require('./config');

config.dbDriver = letcPG;
const app = letc.configure(config);

app.start(() => {
  console.log('server start!');
});
