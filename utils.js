function obtenerFechaActual() {
    // Obtener la fecha y hora actuales
    const now = new Date();

    // Obtener la fecha
    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0'); 
    const año = now.getFullYear(); 

    // Obtener la hora
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');

    // Crear la cadena de fecha y hora
    const fechaHora = `${dia}/${mes}/${año} ${horas}:${minutos}`;

    return fechaHora;
}

module.exports = { obtenerFechaActual };