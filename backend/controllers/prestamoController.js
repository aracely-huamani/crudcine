const Prestamo = require("../models/Prestamo");

exports.crearPrestamo = async (req, res) => {
    try {
        const prestamo = new Prestamo(req.body);

        await prestamo.save();
        res.send(prestamo);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPrestamo = async (req, res) => {

    try {

        const prestamos = await Prestamo.find();
        res.json(prestamos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPrestamo = async (req, res) => {

    try {

        const {_id, idSocio, estado, cintaNumero, fecha } = new Prestamo(req.body);
        let prestamo = await Prestamo.findById(req.params.id);

        if(!prestamo){
            res.status(404).json({ msg: 'No existe el prestamo'});
        }

        prestamo._id = _id;
        prestamo.idsocio = idSocio;
        prestamo.estado = estado;
        prestamo.cintaNumero = cintaNumero;
        prestamo.fecha = fecha;

        console.log(prestamo)

        prestamo = await Prestamo.findOneAndUpdate({ _id: req.params.id }, prestamo, { new: true } );
        res.json(prestamo);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPrestamo = async (req, res) => {

    try {

        let prestamo = await Prestamo.findById(req.params.id);

        if(!prestamo){
            res.status(404).json({ msg: 'No existe el prestamo'});
        }

        res.json(prestamo);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPrestamo = async (req, res) => {

    try {

        let prestamo = await Prestamo.findById(req.params.id);

        if(!prestamo){
            res.status(404).json({ msg: 'No existe el prestamo'});
        }

        prestamo = await Prestamo.findOneAndRemove(req.params.id);

        res.json({ msg: 'El prestamo: ' + prestamo.prestamo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

