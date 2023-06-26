const ListaEspera = require("../models/ListaEspera");

exports.crearListaespera = async (req, res) => {
    try {
        const lista = new ListaEspera(req.body);

        await lista.save();
        res.send(lista);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerListaespera = async (req, res) => {

    try {

        const lista = await ListaEspera.find();
        res.json(lista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarListaespera = async (req, res) => {

    try {

        const {_id, pelicula, socios } = new ListaEspera(req.body);
        let lista = await ListaEspera.findById(req.params.id);

        if(!lista){
            res.status(404).json({ msg: 'No existe la lista'});
        }

        lista._id = _id;
        lista.pelicula = pelicula;
        lista.socios = socios;
        

        console.log(lista)

        lista = await ListaEspera.findOneAndUpdate({ _id: req.params.id }, lista, { new: true } );
        res.json(lista);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verListaespera= async (req, res) => {

    try {

        let lista = await ListaEspera.findById(req.params.id);

        if(!lista){
            res.status(404).json({ msg: 'No existe la lista'});
        }

        res.json(lista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarListaespera = async (req, res) => {

    try {

        let lista = await ListaEspera.findById(req.params.id);

        if(!lista){
            res.status(404).json({ msg: 'No existe la lista'});
        }

        lista = await ListaEspera.findOneAndRemove(req.params.id);

        res.json({ msg: 'La lista: ' + lista.lista + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

