const express = require('express');
const app = express();
const cors = require('cors');


//configuarion
app.set('port', process.env.PORT || 4000);

//middelwares
app.use(cors());
app.use(express.json());


//rutas
app.get('./', (req, res) =>{
    res.send('benvenutto');
});

app.use('/api/usuarios', require('./routes/usuario'));



module.exports = app;