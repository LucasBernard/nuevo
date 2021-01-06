const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:{
        type: 'String',
        required:true,
        trim:true,
    },
    apellido:{
        type: 'String',
        required:true,
        trim:true,
    },
    contrasena:{
        type: 'String',
        required:true,
        trim:true,
    },
    carrera:{
        type: 'String',
        required:true,
        trim:true,
    },
    correo:{
        type: 'String',
        required:true,
        unique:true,
        trim:true,
    },
    telefono:{
        type: 'String',
        required:true,
        trim:true,
    }
})

module.exports = mongoose.model('Usuario',usuarioSchema)
