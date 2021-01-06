const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    nombre:{
        type: 'String',
        required:true,
        trim:true,
    }, 
    dueno:{
        type: 'String',
        required:true,
        trim:true,
    },
    materia:{
        type: 'String',
        required:true,
        trim:true,
    },
    integrantes:{
        type: 'Array'
    }

})

module.exports = mongoose.model('Grupo',grupoSchema)
