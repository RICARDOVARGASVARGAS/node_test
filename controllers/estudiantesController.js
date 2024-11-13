const db = require("../database/conexion");

class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query(`select * from estudiantes`, (err, result) => {
        if (err) {
          res.status(500).send(err);
        }

        res.status(200).json(result);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      db.query(`select * from estudiantes where id = ${id}`, (err, result) => {
        if (err) {
          res.status(500).send(err);
        }

        res.status(200).json(result[0]);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `insert into estudiantes (id, nombre, apellido, email) values (NULL,?,?,?);`,
        [dni, nombre, apellido, email],
        (err, result) => {
          if (err) {
            res.status(500).send(err);
          }

          res.status(200).json({ id: result.insertId });
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  actualizar(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `update estudiantes set dni = ?, nombre = ?, apellido = ?, email = ? where id = ?`,
        [dni, nombre, apellido, email, id],
        (err, result) => {
          if (err) {
            res.status(500).send(err);
          }

          res.status(200).json({ id: result.insertId });
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  eliminar(req, res) {
    const { id } = req.params;
    try {
      db.query(`delete from estudiantes where id = ?`, [id], (err, result) => {
        if (err) {
          res.status(500).send(err);
        }

        res.status(200).json({ id: result.insertId });
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new EstudiantesController();
