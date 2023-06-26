const Pelicula = require("../models/Pelicula");

exports.crearPelicula = async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);

        await pelicula.save();
        res.send(pelicula);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPelicula = async (req, res) => {

    try {

        const peliculas = await Pelicula.find();
        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPelicula = async (req, res) => {

    try {

        const {_id, titulo, genero, director, actores } = new Pelicula(req.body);
        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        peliculas._id = _id;
        peliculas.pelicula = titulo;
        peliculas.pelicula = genero;
        peliculas.pelicula= director;
        peliculas.pelicula = actores;

        console.log(peliculas)

        peliculas = await Pelicula.findOneAndUpdate({ _id: req.params.id }, peliculas, { new: true } );
        res.json(peliculas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPelicula = async (req, res) => {

    try {

        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPelicula = async (req, res) => {

    try {

        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        peliculas = await Pelicula.findOneAndRemove(req.params.id);

        res.json({ msg: 'La pelicula: ' + peliculas.pelicula + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

