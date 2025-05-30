const Moneda = require('../models/moneda-models'); // Modelo de moneda

exports.listarMonedas = async (req, res) => {
    try {
        const monedas = await Moneda.findAll(); // Obtener todas las monedas
        res.json(monedas);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar las monedas' });
    }
};

exports.crearMoneda = async (req, res) => {
    const { nombre, simbolo, tasa_cambio } = req.body;

    try {
        if (!nombre || !simbolo || tasa_cambio === undefined) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const nuevaMoneda = await Moneda.create({ nombre, simbolo, tasa_cambio });
        res.status(201).json(nuevaMoneda);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la moneda', detalles: error.message });
    }
};