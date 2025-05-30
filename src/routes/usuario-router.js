const express = require('express');
const usuariosController = require('../controllers/usuarios-controller');
// const verificarToken = require('../middlewares/auth-middleware');
const router = express.Router();

// Endpoint para crear un nuevo usuario (solo para usuarios autenticados)
router.post('/new', usuariosController.createUser);
// Endpoint para autenticar un usuario
router.post('/login', usuariosController.authUser);

module.exports = router;


