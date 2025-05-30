const express = require('express');
const authController = require('../controllers/auth-controllers');
const router = express.Router();

router.post('/singin', authController.authUser);

module.exports = router;