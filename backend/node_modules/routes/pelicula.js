
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/peliculaController');


router.post('/', peliculaController.crearPelicula);
router.get('/', peliculaController.obtenerPelicula);
router.put('/:id', peliculaController.actualizarPelicula);
router.get('/:id', peliculaController.verPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);

module.exports = router;