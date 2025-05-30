const { DataTypes } = require('sequelize');
const { sequelizePostgres } = require('../../config/postgresql-connect');
const Moneda = require('../models/moneda-models');


const criptomoneda = sequelizePostgres.define('Criptomoneda', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    simbolo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    precio_actual: {
        type: DataTypes.DECIMAL(18, 6),
        allowNull: false
    },
    capitalizacion_mercado: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false
    },
    monedaId: { // Asegúrate de que esta columna esté definida
    type: DataTypes.INTEGER,
    allowNull: false,
        references: {
        model: 'moneda', // Asegúrate de que este nombre sea correcto
        key: 'id'
        }
    }
}, 
{ 
    timestamps: true 
});


criptomoneda.belongsTo(Moneda, { foreignKey: 'monedaId' });
Moneda.hasMany(criptomoneda);

module.exports = criptomoneda;