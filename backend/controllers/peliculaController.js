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
};

exports.obtenerPelicula = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.actualizarPelicula = async (req, res) => {
  try {
    const { _id, titulo, genero, director, actores } = req.body;
    let pelicula = await Pelicula.findById(req.params.id);

    if (!pelicula) {
      return res.status(404).json({ msg: 'No existe la pelicula' });
    }

    pelicula._id = _id;
    pelicula.titulo = titulo;
    pelicula.genero = genero;
    pelicula.director = director;
    pelicula.actores = actores;

    pelicula = await pelicula.save();
    res.json(pelicula);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.verPelicula = async (req, res) => {
  try {
    let pelicula = await Pelicula.findById(req.params.id);

    if (!pelicula) {
      return res.status(404).json({ msg: 'No existe la pelicula' });
    }

    res.json(pelicula);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
  exports.eliminarPelicula = async (req, res) => {
    try {
      const pelicula = await Pelicula.findById(req.params.id);
  
      if (!pelicula) {
        return res.status(404).json({ msg: 'No existe la película' });
      }
  
      await pelicula.remove();
  
      res.json({ msg: 'La película "' + pelicula.titulo + '" se ha eliminado' });
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
    }
  };

