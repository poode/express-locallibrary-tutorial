/**
 * This file will be required for all of the project 
 */
const MongoDb = require('../../core/MongoDb');

const dbType= process.env.DB_TYPE || 'mongodb';
const host = process.env.DB_HOST || '127.0.0.1';
const port = process.env.DB_PORT || 27017;
const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD|| '';
const dbName = process.env.DB_DATABASE || 'test';

// you can change dbURL with whatever you want to adjust db driver
const dbURL =  `${dbType}://${username}:${password}@${host}:${port}/${dbName}`;
// const dbURL =  `${dbType}://${host}:${port}/${dbName}`;

const Db = new MongoDb(dbURL);

module.exports = Db;
