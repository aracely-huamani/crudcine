
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/prestamoController');

router.post('/', prestamoController.crearPrestamo);
router.get('/', prestamoController.obtenerPrestamo);
router.put('/:id', prestamoController.actualizarPrestamo);
router.get('/:id', prestamoController.verPrestamo);
router.delete('/:id', prestamoController.eliminarPrestamo);

module.exports = router;