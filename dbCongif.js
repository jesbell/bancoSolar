const { Pool } = require("pg");

// agrega tus datos de conexión
const name = "";
const pass = "";

const pool = new Pool({
    user: name,
    host: "localhost",
    password: pass,
    database: "bancosolar",
    port: 5432,
});

module.exports = pool;