const test = require('.');
const development = require('./development-data');

const env = process.env.NODE_ENV || 'development';

const data = { test, development, production: development };

module.exports = data[env];