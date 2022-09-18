const mongoose = require('mongoose');

const mongoConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => {
        console.error(`Error en la base de datos ${error}`);
    });
}

module.exports = {mongoConnection}