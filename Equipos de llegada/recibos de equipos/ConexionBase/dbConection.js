import mysql from 'mysql2';

// Configuración de la conexión
const connectionSettings={
    host: 'localhost', // Host de la base de datos
    database: 'RECEPCIONDEEQUIPOS', // Nombre de la base de datos
    user: 'DESKTOP-JH2Q2UK/amesg', // Usuario de la base de datos    
    password: '', // Contraseña de la base de datos
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};
// Conectar a la base de datos
function connect(){
    const connection = mysql.createConnection(connectionSettings);
    connection.connect((error)=>{
        if(error){
            console.error('Error connecting: ' + error.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });
    return connection;
}

export{mysql};