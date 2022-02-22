require('dotenv').config();
const app = require('./app');
require('./database');

//acá se ejecuta el servidor a travez de la configuración de app.js

async function main(){
    await app.listen(app.get('port'));
    console.log(app.get('port'));
}

main();