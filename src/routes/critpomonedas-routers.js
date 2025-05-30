const express = require('express');
const router = express.Router();
// const verificarToken = require('../middlewares/auth-middleware');
const criptomonedasController = require('../controllers/criptomoneda-controller'); // Controlador para criptomonedas

// Obtener todas las criptomonedas
router.get('/criptomoneda', criptomonedasController.listarCriptomonedas);

// Obtener criptomonedas relacionadas con una moneda específica
router.get('/criptomoneda', criptomonedasController.listarCriptomonedasPorMoneda);

// Crear nueva criptomoneda
router.post('/criptomonedas', criptomonedasController.crearCriptomoneda);

// Actualizar criptomoneda
router.put('/criptomonedas/:id', criptomonedasController.actualizarCriptomoneda);

module.exports = router;