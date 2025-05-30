const dotenv = require('dotenv').config();
// CREDENCIALES POSTGRESQL/
const postgreSqlConfig = {
    host: process.env.POSTGRESQL_SERVER,
    port: process.env.POSTGRESQL_PORT,
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE
};

// JWT
const jwtSecretKey = process.env.JWT_SECRET_KEY

module.exports = {
    postgreSqlConfig,
    jwtSecretKey
};