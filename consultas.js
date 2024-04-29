const pool = require('./dbConfig');


const getUsuarios = async () => {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
};


module.exports = { getUsuarios };
