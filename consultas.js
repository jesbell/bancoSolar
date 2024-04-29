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


module.exports = { getUsuarios, editUsuario, delUsuario, addUsuario};
