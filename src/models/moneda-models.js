const { DataTypes } = require('sequelize');
const { sequelizePostgres } = require('../../config/postgresql-connect');

const Moneda = sequelizePostgres.define('Moneda', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    simbolo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tasa_cambio: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: false
    }
}, { timestamps: true });

module.exports = Moneda;