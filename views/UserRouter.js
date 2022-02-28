const express = require('express');
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/auth");

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');

module.exports = router;