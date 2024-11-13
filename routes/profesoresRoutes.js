const express = require("express");
const router = express.Router();

const ProfesoresController = require("../controllers/profesoresController");
const profesoresController = require("../controllers/profesoresController");

router.get("/", profesoresController.consultar);

router.post("/", profesoresController.registrar);

router
  .route("/:id")
  .get(profesoresController.consultarDetalle)
  .put(profesoresController.actualizar)
  .delete(profesoresController.eliminar);

module.exports = router;
