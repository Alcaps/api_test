const { Sequelize } = require('sequelize');
const { postgreSqlConfig } = require('./config');

const database = postgreSqlConfig.database;
const username = postgreSqlConfig.user;
const password = postgreSqlConfig.password;
const host = postgreSqlConfig.host;
const port = postgreSqlConfig.port

const sequelizePostgres = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: 'postgres',
    timezone: '-04:00',
    logging: false
});

module.exports = {
    sequelizePostgres
}