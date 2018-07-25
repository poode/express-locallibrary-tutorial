/**
 * This file will be required for all of the project 
 */
const MongoDb = require('../../core/MongoDb');
require('dotenv').config();

// you can change dbURL with whatever you want to adjust db driver
const dbURL =  `${process.env.DB_TYPE}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const Db = new MongoDb(dbURL);

module.exports = Db;
