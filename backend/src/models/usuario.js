const { Schema, model } = require('mongoose');

const usuariosShema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
},
{
    timestamps: true
});

module.exports = model('Usuario', usuariosShema);