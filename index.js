const express = require("express");
const pool = require('./dbConfig');
const { getUsuarios, editUsuario, delUsuario, addUsuario, transfiere, getTransferencias } = require("./consultas");
const app = express();
const PORT = 3000;
app.use(express.json());


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

// Solicitud GET a la ruta raíz ("/")
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
        res.status(200).json({ message: 'Usuario eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
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

// endpoint obtener todas las transferencias
app.get("/transferencias", async (req,res) => {
    try {
        const resultado = await getTransferencias();
        //console.log(resultado);
        res.json(resultado);
    } catch (error) {
        console.error("Error en get usuarios", error);         
    }
});

// Ruta genérica 
app.get("*", (req, res) => {
    res.send("<center><h1>Esta página no existe... </h1></center>");
});