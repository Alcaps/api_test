const { app } = require('./app');

const { sequelizePostgres } = require('./config/postgresql-connect');
// require('./src/models/associations'); // Importa las asociaciones aquí

sequelizePostgres.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto${puerto}`);
});