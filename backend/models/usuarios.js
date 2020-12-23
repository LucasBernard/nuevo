'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    
  } 
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    carrera:DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Usuarios',
    timestamps: false
  });
  return Usuarios;
};