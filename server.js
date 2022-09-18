const app = require('./app');
const {mongoConnection} = require('./database/configuration');
const dotenv = require('dotenv').config();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Escuchando en puerto ${app.get('port')}`);
    mongoConnection();
});