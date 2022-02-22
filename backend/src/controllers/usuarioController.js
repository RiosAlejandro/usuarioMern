const usuarioCtrl = {};

const { json } = require('express');
const Usuario = require('../models/usuario');

usuarioCtrl.getUso = async(req, res) =>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtrl.createUso = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUso = new Usuario({
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo,
        edad: edad
    });
    await newUso.save();
    res.json({message: 'usuario creado'});
}

usuarioCtrl.getUsuario = async(req, res) =>{
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioCtrl.deleteUso = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({message: 'usuario eliminado'});
}

usuarioCtrl.updateUso = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido, 
        edad, 
        correo, 
        telefono
    })
    res.json({message: 'usuario actualizado'});
}

module.exports = usuarioCtrl;