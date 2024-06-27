//inicio el servidor
const express = require("express");

//Creación del servidor
const app = express();

//Corre el servidor en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servidor en puerto ${PORT}`));