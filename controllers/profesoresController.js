class ProfesoresController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "Consulta de profesores" });
  }

  consultarDetalle(req, res) {
    res.json({ msg: "Consulta de  un profesores" });
  }

  registrar(req, res) {
    res.json({ msg: "Registro de profesores" });
  }

  actualizar(req, res) {
    res.json({ msg: "Actualización de profesores" });
  }

  eliminar(req, res) {
    res.json({ msg: "Eliminación de profesores" });
  }
}

module.exports = new ProfesoresController();
