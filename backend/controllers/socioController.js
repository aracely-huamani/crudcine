const Socio = require("../models/Socio");

exports.crearSocio = async (req, res) => {
    try {
        const socio = new Socio(req.body);

        await socio.save();
        res.send(socio);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSocio = async (req, res) => {

    try {

        const socios = await Socio.find();
        res.json(socios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarSocio = async (req, res) => {

    try {

        const {_id, nombre, direccion, telefono, directoresFavoritos,actoresFavoritos,generosPreferidos } = new Socio(req.body);
        let socio = await Socio.findById(req.params.id);

        if(!socio){
            res.status(404).json({ msg: 'No existe el socio'});
        }

        socio._id = _id;
        socio.nombre = nombre;
        socio.direccion = direccion;
        socio.telefono = telefono;
        socio.directoresFavoritos = directoresFavoritos;
        socio.actoresFavoritos=actoresFavoritos
        socio.generosPreferidos=generosPreferidos

        console.log(socio)

        socio = await Socio.findOneAndUpdate({ _id: req.params.id }, socio, { new: true } );
        res.json(socio);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verSocio = async (req, res) => {

    try {

        let socio = await Socio.findById(req.params.id);

        if(!socio){
            res.status(404).json({ msg: 'No existe el socio'});
        }

        res.json(socio);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarSocio = async (req, res) => {

    try {

        let socio = await Socio.findById(req.params.id);

        if(!socio){
            res.status(404).json({ msg: 'No existe el socio'});
        }

        socio = await Socio.findOneAndRemove(req.params.id);

        res.json({ msg: 'El socio: ' + socio.socio + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
