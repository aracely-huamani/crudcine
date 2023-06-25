const Producto = require("../models/Pelicula");

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

        const pelicula = await Pelicula.find();
        res.json(pelicula);
        
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

        pelicula._id = _id;
        peliculas.pelicula = titulo;
        peliculas.pelicula = genero;
        peliculas.pelicula= director;
        peliculas.pelicula = actores;

        console.log(products)

        products = await Producto.findOneAndUpdate({ _id: req.params.id }, products, { new: true } );
        res.json(products);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verProducto = async (req, res) => {

    try {

        let products = await Producto.findById(req.params.id);

        if(!products){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarProducto = async (req, res) => {

    try {

        let products = await Producto.findById(req.params.id);

        if(!products){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        products = await Producto.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + products.producto + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

