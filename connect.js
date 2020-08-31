import config from './config/config';

let mysql = require('mysql');

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  } 

  return console.log('Connected to the MySQL server.');
});