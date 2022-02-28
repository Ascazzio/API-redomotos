const express = require('express');
const router = express.Router();
const PartController = require("../controllers/PartController");

// Middlewares
const authJwt = require("../middlewares/auth");

router.get('/', authJwt.verifyToken, PartController.getAll);

// router.get('/:id', authJwt.verifyToken, PartController.getById);

module.exports = router;