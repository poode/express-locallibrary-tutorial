class Model {
    constructor () {
        this.mongoose = require('mongoose');
        this.connection = require('../config/Database/Db');
        this.Schema = this.mongoose.Schema;
    }
}

module.exports = Model;