/**
 * in this file we just load environment variables and use it all over the project.
 */
const dotenv = require('dotenv');

// this loads the defined variables from .env
const result = dotenv.config();

if (result.error) {
    throw result.error
}

const env_vars = result.parsed;

module.exports = env_vars;



