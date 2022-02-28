'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
    up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('users', [{
        firstName: "Fabrizio",
        lastName: "Pironi",
        email: "fabrizio@redomotos.com",
        password: bcrypt.hashSync("fabrizioadmin", Number.parseInt(authConfig.rounds)),
        phone: "632000000",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Ambrosio",
        lastName: "Pironi",
        email: "ambrosio@gmail.com",
        password: bcrypt.hashSync("ambrosio", Number.parseInt(authConfig.rounds)),
        phone: "6336548485",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
  
    down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('users', null, {});
  
    }
};
  
