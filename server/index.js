const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 3001;
const db = require("./models");

const rutaPrestamos = require("./routes/Prestamos");

app.use(express.json());
app.use(cors());
app.use("/prestamos", rutaPrestamos);

db.sequelize.sync().then(() => {
  app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
  });
});
