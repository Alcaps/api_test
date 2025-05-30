const bcrypt = require('bcrypt');

class UsuariosServices{
    constructor(usuariosModel) {
        this.usuariosModel = usuariosModel;
    }
    
    async createUser(email, password) {
        try {
            const encryptedPassword = await bcrypt.hash(password, 10);
            await this.usuariosModel.usuarios.create({
               email: email,
               password: encryptedPassword
            });

            return;
        } catch (error) {
            console.error(error);
        }
    }
    async getUseByEmail(email) {
        try {
            const usuario = await this.usuariosModel.usuarios.findOne({ where: { email: email} });;
            return usuario;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports.UsuariosServices = UsuariosServices;