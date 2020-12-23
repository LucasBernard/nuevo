const express = require("express");
const app = express();
require("dotenv").config()
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/rutas", require("./routes/route"));

app.listen(8000, console.log("El servidor está corriendo en el puerto 3000"))