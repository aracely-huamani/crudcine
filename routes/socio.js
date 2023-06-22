
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/socioController');


router.post('/',socioController.crearSocio);
router.get('/', socioController.obtenerSocio);
router.put('/:id', socioController.actualizarSocio);
router.get('/:id', socioController.verSocio);
router.delete('/:id', socioController.eliminarSocio);

module.exports = router;