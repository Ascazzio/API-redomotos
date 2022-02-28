'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
    up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('parts', [{
        name: "Discos de freno",
        description: "Discos de freno ventilados",
        pictureLink: "sin foto",
        type: "Frenos",
        brand: "StopTech",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Suspension deportiva",
        description: "Amortiguadores de alto rendimiento",
        pictureLink: "sin foto",
        type: "Suspension",
        Brand: "Fox",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
  
    down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('users', null, {});
  
    }
};
  
