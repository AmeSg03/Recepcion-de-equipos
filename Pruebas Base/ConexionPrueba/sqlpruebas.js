import { sql, connect } from "./dbConnection.js"

// Connect to the database
async function getProducts() {
  try {
    // Get connection pool
    const pool = await connect()

    // Query data
    const result = await pool.request().query("SELECT Fecha, NoInventarios, NoSerie FROM Recepción")

    console.log(result.recordset)
    console.log("Recepción de Equipos")

    return result.recordset
  } catch (error) {
    console.error("Error querying database:", error)
    throw error
  }
}

// Example function to save a new device reception
async function saveReception(receptionData) {
  try {
    const pool = await connect()
    const result = await pool
      .request()
      .input("fecha", sql.Date, receptionData.fecha)
      .input("noInventario", sql.VarChar, receptionData.noInventario)
      .input("noSerie", sql.VarChar, receptionData.noSerie)
      .input("descripcion", sql.VarChar, receptionData.descripcion)
      .input("marca", sql.VarChar, receptionData.marca)
      .input("modelo", sql.VarChar, receptionData.modelo)
      .input("accesorios", sql.VarChar, receptionData.accesorios)
      .input("passwords", sql.VarChar, receptionData.passwords)
      .input("departamento", sql.VarChar, receptionData.departamento)
      .input("extension", sql.VarChar, receptionData.extension)
      .input("entregadoPor", sql.VarChar, receptionData.entregadoPor)
      .input("recibidoPor", sql.VarChar, receptionData.recibidoPor)
      .input("fallaUsuario", sql.VarChar, receptionData.fallaUsuario)
      .query(`
        INSERT INTO Recepción (
          Fecha, NoInventarios, NoSerie, Descripcion, Marca, Modelo, 
          Accesorios, Passwords, Departamento, Extension, 
          EntregadoPor, RecibidoPor, FallaUsuario
        ) 
        VALUES (
          @fecha, @noInventario, @noSerie, @descripcion, @marca, @modelo,
          @accesorios, @passwords, @departamento, @extension,
          @entregadoPor, @recibidoPor, @fallaUsuario
        )
      `)

    return result
  } catch (error) {
    console.error("Error saving reception:", error)
    throw error
  }
}

// Call the function to test
getProducts()

export { getProducts, saveReception }

