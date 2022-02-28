//Importo modelo de datos
const db = require("../models");
const parts = db.part;
const order = db.order;

const PartController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all movies from database
PartController.getAll = (req, res) => {

  movies.findAll({ include: [{ model: order }] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving parts."
      });
    });
};

module.exports = PartController;