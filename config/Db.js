/**
 * This file will be required for all of the project 
 */
const MongoDb = require('./MongoDb');

const dbURL =  'mongodb://127.0.0.1:27017/local_library';
const Db = new MongoDb(dbURL);

module.exports = Db;
