const express = require("express");
const router = express.Router();

const estudiantesController = require("../controllers/estudiantesController");

router.get("/", estudiantesController.consultar);

router.post("/", estudiantesController.registrar);

router
  .route("/:id")
  .get(estudiantesController.consultarDetalle)
  .put(estudiantesController.actualizar)
  .delete(estudiantesController.eliminar);

module.exports = router;
