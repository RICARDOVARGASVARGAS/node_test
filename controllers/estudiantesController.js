class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "Consulta de estudiantes" });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: "Consulta de  un estudiantes " + id + "" });
  }

  registrar(req, res) {
    res.json({ msg: "Registro de estudiantes" });
  }

  actualizar(req, res) {
    res.json({ msg: "Actualización de estudiantes" });
  }

  eliminar(req, res) {
    res.json({ msg: "Eliminación de estudiantes" });
  }
}

module.exports = new EstudiantesController();
