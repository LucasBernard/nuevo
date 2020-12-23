'use strict';
const { sequelize } = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
          id: {
            allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
          },
          nombre: {
            type: Sequelize.STRING},
          apellido: {
            type: Sequelize.STRING},
          contrasena: {
            type: Sequelize.STRING},
          carrera: {
              type: Sequelize.STRING},
          correo:{
            type: Sequelize.STRING
          },
          telefono: {
            type: Sequelize.INTEGER}
    }
};
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }

};