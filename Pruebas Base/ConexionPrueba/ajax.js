// AJAX functions to connect the form with the backend

document.addEventListener("DOMContentLoaded", () => {
  const deviceForm = document.getElementById("deviceForm")

  if (deviceForm) {
    deviceForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = {
        fecha: document.getElementById("receptionDate").value,
        noInventario: document.getElementById("inventoryNo").value,
        noSerie: document.getElementById("serialNo").value,
        descripcion: document.getElementById("description").value,
        marca: document.getElementById("brand").value,
        modelo: document.getElementById("model").value,
        accesorios: document.getElementById("accessories").value,
        passwords: document.getElementById("passwords").value,
        departamento: document.getElementById("department").value,
        extension: document.getElementById("extension").value,
        entregadoPor: document.getElementById("deliveredBy").value,
        recibidoPor: document.getElementById("receivedBy").value,
        fallaUsuario: document.getElementById("userIssue").value,
      }

      // Send data to server
      saveReception(formData)
    })
  }

  // Function to save reception data
  async function saveReception(data) {
    try {
      const response = await fetch("/api/save-reception", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        alert("Recibo guardado correctamente")
        // Optionally clear form or redirect
      } else {
        alert("Error al guardar el recibo")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error de conexión")
    }
  }
})

