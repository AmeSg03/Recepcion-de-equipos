import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'DESKTOP-JH2Q2UK',      // Cambia si tu BD está en otro servidor
    user: 'DESKTOP-JH2Q2UK/Amesg',     // Usuario de la BD
    password: '', // Contraseña de la BD
    database: 'RECEPCIONDEEQUIPOS', // Nombre de tu base de datos
    port: 3305             // Puerto de MySQL, el tuyo es 3305
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;


// Función para obtener productos
const getProducts = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT Fecha, NoInventarios, NoSerie FROM Recepción');
        console.log(result);
        console.log("Recepción de Equipos");
    } catch (error) {
        console.error(error);
    }
};

getProducts();