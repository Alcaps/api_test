// const jwt = require('jsonwebtoken');

// const verificarToken = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del encabezado
//     if (!token) {
//         return res.status(403).json({ error: 'Se requiere un token para acceder a este recurso' });
//     }
    
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ error: 'Token inválido' });
//         }
//         req.userId = decoded.id; 
//         next(); 
//     });
// };

// module.exports = verificarToken;