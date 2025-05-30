const Criptomoneda = require('../models/Criptomoneda-models'); // Modelo de criptomoneda
const Moneda = require('../models/moneda-models'); // Modelo de moneda

exports.listarCriptomonedas = async (req, res) => {
    try {
        const criptomonedas = await Criptomoneda.findAll({ include: Moneda }); // Asegúrate de que el modelo Criptomoneda esté configurado correctamente
        res.json(criptomonedas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al listar las criptomonedas', details: error.message });
    }
};

exports.listarCriptomonedasPorMoneda = async (req, res) => {
    const { moneda } = req.query; // Obtener la moneda de los parámetros de consulta
    try {
        const criptomonedas = await Criptomoneda.findAll({ where: { monedaId: moneda }, include: Moneda }); // Filtrar por moneda
        res.json(criptomonedas);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar las criptomonedas por moneda' });
    }
};

exports.crearCriptomoneda = async (req, res) => {
    const { nombre, simbolo, precio_actual, capitalizacion_mercado, monedaId } = req.body; // Obtener todos los campos necesarios
    try {
        const nuevaCriptomoneda = await Criptomoneda.create({ 
            nombre, 
            simbolo, 
            precio_actual, 
            capitalizacion_mercado, 
            monedaId 
        });
        res.status(201).json(nuevaCriptomoneda);
    } catch (error) {
        console.error(error); // Para ver el error en la consola
        res.status(500).json({ error: 'Error al crear la criptomoneda' });
    }
};

exports.actualizarCriptomoneda = async (req, res) => {
    const { id } = req.params; // Obtener el ID de la criptomoneda de los parámetros
    const { nombre, monedaId } = req.body; // Obtener los nuevos datos del cuerpo
    try {
        await Criptomoneda.update({ nombre, monedaId }, { where: { id } }); // Actualizar la criptomoneda
        res.json({ message: 'Criptomoneda actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la criptomoneda' });
    }
};




