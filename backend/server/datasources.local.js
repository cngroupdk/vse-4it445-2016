'use strict';
const path = require('path');

const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

module.exports = {
  mysqlds: {
    name: "mysqlds",
    connector: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
  },
  container: {
    name: "container",
    connector: "loopback-component-storage",
    provider: "filesystem",
    root: path.join(__dirname, '..', 'uploads'),
  }
}
