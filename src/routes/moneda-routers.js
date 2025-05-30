const express = require('express');
const router = express.Router();
// const verificarToken = require('../middlewares/auth-middleware');
const monedasController = require('../controllers/moneda-controller'); // Controlador para monedas

// Obtener todas las monedas
router.get('/moneda', monedasController.listarMonedas);

// Crear nueva moneda
router.post('/moneda', monedasController.crearMoneda);

module.exports = router;
