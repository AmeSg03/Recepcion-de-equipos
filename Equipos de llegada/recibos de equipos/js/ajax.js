function buscarDispositivos(searchTerm) {
    $.ajax({
        url: 'http://localhost:5000/buscar_dispositivos',
        type: 'GET',
        data: { searchTerm: searchTerm },
        success: function(response) {
            var dispositivos = response;
            var output = '';
            dispositivos.forEach(function(dispositivo) {
                output += '<tr>';
                output += '<td>' + dispositivo.noInventario + '</td>';
                output += '<td>' + dispositivo.noFolio + '</td>';
                output += '<td>' + dispositivo.noSerie + '</td>';
                output += '<td>' + dispositivo.marca + '</td>';
                output += '<td>' + dispositivo.modelo + '</td>';
                output += `
                    <td>
                        <button onclick="editDevice(${dispositivo.id})" style="background-color: #007bff; color: white; border: none; padding: 5px 10px; border-radius: 3px; margin-right: 5px;">Editar</button>
                        <button onclick="window.location.href='recibo-recepcion.html'" style="background-color: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px; margin-right: 5px;">Ver</button>
                        <button onclick="window.location.href='recibo-diagnostico.html'" style="background-color: #ffc107; color: black; border: none; padding: 5px 10px; border-radius: 3px; margin-right: 5px;">Diagnóstico</button>
                        <button onclick="window.location.href='recibo-devolucion.html'" style="background-color: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px;">Devolución</button>
                    </td>
                `;
                output += '</tr>';
            });
            $('#resultTable').html(output);
        },
        error: function(error) {
            console.error('Error en la búsqueda:', error);
            $('#resultTable').html('<tr><td colspan="6">Ocurrió un error al realizar la búsqueda</td></tr>');
        }
    });
}

function guardarDiagnostico(data) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/guardar_diagnostico',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
            alert('Diagnóstico guardado exitosamente.');
        },
        error: function(xhr, status, error) {
            alert('Error al guardar el diagnóstico: ' + error);
        }
    });
}

function guardarDevolucion() {
    var formData = {
        inventoryNo: $('#inventoryNo').val(),
        folioNo: $('#folioNo').val(),
        serialNo: $('#serialNo').val(),
        brand: $('#brand').val(),
        model: $('#model').val(),
        date: $('#date').val(),
        accessories: $('#accessories').val(),
        solution: $('#solution').val(),
        deliveredBy: $('#deliveredBy').val(),
        signatureDelivered: $('#signatureDelivered').val(),
        receivedBy: $('#receivedBy').val(),
        signatureReceived: $('#signatureReceived').val()
    };

    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/guardar_devolucion',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
            alert('Devolución guardada exitosamente.');
        },
        error: function(xhr, status, error) {
            alert('Error al guardar la devolución: ' + error);
        }
    });
}

function guardarRecepcion(data) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/guardar_recepcion',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
            alert('Recepción guardada exitosamente.');
        },
        error: function(xhr, status, error) {
            alert('Error al guardar la recepción: ' + error);
        }
    });
}

function saveDevice() {
    var deviceData = {
        id: $('#deviceId').val(),
        inventoryNo: $('#inventoryNo').val(),
        folioNo: $('#folioNo').val(),
        serialNo: $('#serialNo').val(),
        brand: $('#brand').val(),
        model: $('#model').val()
    };

    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/guardar_dispositivo',
        data: JSON.stringify(deviceData),
        contentType: 'application/json',
        success: function(response) {
            alert('Dispositivo guardado exitosamente.');
            performSearch();
        },
        error: function(xhr, status, error) {
            alert('Error al guardar el dispositivo: ' + error);
        }
    });
}

function editDevice(id) {
    $.ajax({
        url: 'http://localhost:5000/obtener_dispositivo',
        type: 'GET',
        data: { id: id },
        success: function(response) {
            var dispositivo = response;
            $('#deviceId').val(dispositivo.id);
            $('#inventoryNo').val(dispositivo.noInventario);
            $('#folioNo').val(dispositivo.noFolio);
            $('#serialNo').val(dispositivo.noSerie);
            $('#brand').val(dispositivo.marca);
            $('#model').val(dispositivo.modelo);
        },
        error: function(error) {
            console.error('Error al obtener el dispositivo:', error);
        }
    });
}