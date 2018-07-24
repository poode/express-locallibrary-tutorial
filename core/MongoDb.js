/**
 *  you will require this file to create instance of db connection
 * 
 * @param dbURL is a string for MongoDb Connection
 * @returns Null 
 * 
 */
const mongoose = require('mongoose');

class MongoDB {
    constructor (dbURL) {
         //Set up default mongoose connection
        this.mongoDB = dbURL;

        //Get the default connection
        mongoose.connect(this.mongoDB, { useNewUrlParser: true });

        // Get Mongoose to use the global promise library
        mongoose.Promise = global.Promise;
                
        this.db = mongoose.connection;
        console.log('connected to Database Now!');
        
        //Bind connection to error event (to get notification of connection errors)
        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
}

module.exports = MongoDB;
