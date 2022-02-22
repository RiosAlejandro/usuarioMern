const {Router} = require('express');
const router = Router();

const { createUso, getUso, getUsuario, deleteUso, updateUso } = require('../controllers/usuarioController');

router.route('/')

    .get(getUso)
    .post(createUso)

router.route('/id')

    .get(getUsuario)
    .delete(deleteUso)
    .put(updateUso)


module.exports = router;