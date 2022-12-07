const express = require("express");
const path = require("path");
const port = 3030;
const app = express();

app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}`));