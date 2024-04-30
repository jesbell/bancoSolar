const pool = require('./dbConfig');


const getUsuarios = async () => {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
};

const editUsuario = async (id, name, balance) => {
    try {
        const result = await pool.query('UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3', 
        [name, balance, id]);
        return result.rows;
        
    } catch (error) {
        console.error("Error al actualizar usuario", error); 
    }
    
}

const delUsuario = async (id) => {
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        return result.rows;
        
    } catch (error) {
        console.error("Error al actualizar usuario", error); 
    }
    
}

const addUsuario = async (nombre, balance) => {
    try {
        const query = 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2)';
        const values = [nombre, balance];
        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Error al agregar usuario a la base de datos", error); 
    }
    
}

const transfiere = async (emisor, receptor, monto) => {
    const actualizarCuentaEmisora = {
        text: `UPDATE usuarios SET balance = balance - $1 WHERE id = $2 RETURNING *`,
        values: [monto, emisor],
    };

    const actualizarCuentaReceptora = {
        text: `UPDATE usuarios SET balance = balance + $1 WHERE id = $2 RETURNING *`,
        values: [monto, receptor],
    };

    const nueva = {
        text: "INSERT INTO transferencias (emisor, receptor, monto, fecha) values ($1, $2, $3, now()) returning *",
        values: [emisor, receptor, monto],
    };

    try {
        await pool.query("BEGIN");
        const result = await pool.query(nueva);
        await pool.query(actualizarCuentaEmisora);
        await pool.query(actualizarCuentaReceptora);
        await pool.query("COMMIT");
        console.log("Transacción realizada con éxito");
        console.log("Ultima transacción: ", result.rows[0]);
        return result.rows;
    } catch (e) {
        await pool.query("ROLLBACK");
        throw e;
    }

}

module.exports = { getUsuarios, editUsuario, delUsuario, addUsuario, transfiere};
