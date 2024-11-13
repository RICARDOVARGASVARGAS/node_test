class CursosController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "Consulta de cursos" });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: "Consulta de  un cursos " + id + "" });
  }

  registrar(req, res) {
    res.json({ msg: "Registro de cursos" });
  }

  actualizar(req, res) {
    res.json({ msg: "Actualización de cursos" });
  }

  eliminar(req, res) {
    res.json({ msg: "Eliminación de cursos" });
  }
}

module.exports = new CursosController();
