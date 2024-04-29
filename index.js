const express = require("express");
const pool = require('./dbConfig');
/* const {  } = require("./consultas");
 */const app = express();
const PORT = 3000;
app.use(express.json());


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});