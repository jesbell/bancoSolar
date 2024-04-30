const express = require("express");
const pool = require('./dbConfig');
const { getUsuarios, editUsuario, delUsuario, addUsuario, transfiere } = require("./consultas");
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

// endpoint para editar usuario
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

// eliminar usuario por id
app.delete("/usuario", async (req, res) => {
    try {
        const { id } = req.query;
        const resultado = await delUsuario(id);
        res.json(resultado);
    } catch (error) {
        console.error("Error al eliminar usuario", error);
    }   

});

// endpoint agregar usuario
app.post("/usuario", async (req, res) => {
    const { nombre, balance } = req.body;
    try {
        const resultado = await addUsuario(nombre, balance);
        res.json(resultado);
    } catch (error) {
        console.error("Error al agregar usuario", error);
    }
});

// endpoint de transferencia
app.post("/transferencia", async (req,res) =>{
    const { emisor, receptor, monto } = req.body;
    try {
        const resultado = await transfiere(emisor, receptor, monto);
        res.json(resultado);
    } catch (error) {
        console.error("Error al realizar transferencia", error);
    }
});