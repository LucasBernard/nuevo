const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const {mongoose} = require('./src/database');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());


app.use('/rutas', require('./routes/usuarioRoutes'));
app.use('/rutasGrupo',require('./routes/grupoRoutes'));
app.use('/rutasValidacion',require('./routes/validacionRoutes'));




app.listen(8000,() => {
    console.log('server corriendo en el 3000');
})

