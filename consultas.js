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


module.exports = { getUsuarios, editUsuario };
