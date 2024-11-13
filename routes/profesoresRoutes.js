const express = require("express");
const router = express.Router();

const ProfesoresController = require("../controllers/profesoresController");
const profesoresController = require("../controllers/profesoresController");

router.get("/", profesoresController.consultar);

router.post("/", profesoresController.registrar);

router
  .route("/:id")
  .get((req, res), profesoresController.consultarDetalle)
  .put((req, res), profesoresController.actualizar)
  .delete((req, res), profesoresController.eliminar);

module.exports = router;
