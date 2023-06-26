const express = require('express');
const router = express.Router();
const listaesperaController = require('../controllers/listaesperaController');


router.post('/', listaesperaController.crearListaespera);
router.get('/', listaesperaController.obtenerListaespera);
router.put('/:id', listaesperaController.actualizarListaespera);
router.get('/:id', listaesperaController.verListaespera);
router.delete('/:id', listaesperaController.eliminarListaespera);

module.exports = router;
