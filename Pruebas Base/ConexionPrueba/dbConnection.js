import sql from "mssql";

// SQL Server connection configuration
const connectionSettings = {
  server: "DESKTOP-JH2Q2UK", // SQL Server instance name
  database: "RECEPCIONDEEQUIPOS", // Database name
  authentication: {
    type: "default",
    options: {
      userName: "sa", // Replace with your SQL Server username
      password: "", // Replace with your SQL Server password
    },
  },
  options: {
    encrypt: true,
    trustServerCertificate: true, // For development only
    enableArithAbort: true,
  },
}

// Create a connection pool
let pool = null

// Connect to the database
async function connect() {
  try {
    if (!pool) {
      pool = await sql.connect(connectionSettings)
      console.log("Connected to SQL Server")
    }
    return pool
  } catch (error) {
    console.error("Error connecting to SQL Server:", error)
    throw error
  }
}

// Close the connection
async function close() {
  try {
    if (pool) {
      await pool.close()
      pool = null
      console.log("Connection closed")
    }
  } catch (error) {
    console.error("Error closing connection:", error)
    throw error
  }
}

export { sql, connect, close }

