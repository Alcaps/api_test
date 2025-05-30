const { UsuariosServices } = require('../services/usuarios-services');
const usuarios = require('../models/usuario-models');

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const usuariosServices = new UsuariosServices(usuarios);
        await usuariosServices.createUser(email, password);
        res.status(201).json({ respuesta: 'Usuario Creado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ respuesta: error });
    }
};

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuariosServices = new UsuariosServices(usuarios);
        const usuario = await usuariosServices.getUseByEmail(email);

        // Verificar si el usuario existe y la contraseña es correcta
        if (usuario && await bcrypt.compare(password, usuario.password)) {
            // Generar el token JWT
            const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ respuesta: 'Usuario Autenticado', token });
        } else {
            res.status(401).json({ respuesta: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ respuesta: error });
    }
};

module.exports = {
    createUser,
    authUser
};