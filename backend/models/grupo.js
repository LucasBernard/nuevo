'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {
    static associate(models) {
      // define association here

    }
    
  };
  Grupo.init({
    id_creador: DataTypes.INTEGER,
    nombre : DataTypes.INTEGER,
    ramo_interes : DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Grupo',
    timestamps: false
  });
  return Grupo;
};