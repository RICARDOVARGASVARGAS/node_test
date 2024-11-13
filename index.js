const express = require("express");
const app = express();

const estudiantesRoutes = require("./routes/estudiantesRoutes");
const profesoresRoutes = require("./routes/profesoresRoutes");

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);

app.get("/", (req, res) => {
  res.send("Hello, mundo!");
});

app.listen(6500, () => {
  console.log("Servidor rodando na porta 6500");
});
