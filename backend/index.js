const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/peliculas', require('./routes/pelicula'));
app.use('/api/listaesperas', require('./routes/listaespera'));
app.use('/api/prestamos', require('./routes/prestamo'));
app.use('/api/socios', require('./routes/socio'));
app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})
