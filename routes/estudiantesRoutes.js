const express = require("express");
const router = express.Router();

const estudiantesController = require("../controllers/estudiantesController");

router.get("/", estudiantesController.consultar);

router.post("/", estudiantesController.registrar);

router
  .route("/:id")
  .get((req, res), estudiantesController.consultarDetalle)
  .put((req, res), estudiantesController.actualizar)
  .delete((req, res), estudiantesController.eliminar);

module.exports = router;
