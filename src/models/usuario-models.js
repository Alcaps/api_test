const { DataTypes } = require('sequelize');
const { sequelizePostgres } = require('../../config/postgresql-connect');

const usuarios = sequelizePostgres.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    tableName: 'usuarios',
    timestamps: false, // Desactiva los timestamps
});

module.exports.usuarios = usuarios;
