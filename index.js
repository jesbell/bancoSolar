const express = require("express");
const pool = require('./dbConfig');
const { getUsuarios, editUsuario } = require("./consultas");
const app = express();
const PORT = 3000;
app.use(express.json());


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// endpoint para obtener todos los usuarios
app.get("/usuarios", async (req, res) => {
    try {
        const resultado = await getUsuarios()       ;
        res.json(resultado);
    } catch (error) {
        console.error("Error en get usuarios", error);         
    }
});

app.put("/usuario", async (req, res) => {
    try {
        const { id } = req.query;
        const {name, balance} = req.body;
        const resultado = await editUsuario(id, name, balance);
        res.json(resultado);
        
    } catch (error) {
        console.error("Error en editando usuario", error);   
    }
});