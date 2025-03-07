function performSearch() {
    var searchTerm = $('#searchInput').val();
    buscarDispositivos(searchTerm);
}

function buscarDispositivos(searchTerm) {
    $.ajax({
        url: '../api/buscar_dispositivos.php',
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
            $('#resultsBody').html(output);
        },
        error: function(error) {
            console.error('Error en la búsqueda:', error);
            $('#resultsBody').html('<tr><td colspan="6">Ocurrió un error al realizar la búsqueda</td></tr>');
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
        url: '../api/guardar_dispositivo.php',
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
        url: '../api/obtener_dispositivo.php',
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
