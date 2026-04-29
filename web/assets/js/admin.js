// Simulación de datos iniciales
let convocatoriasAdmin = [
    { id: 1, titulo: "Beca Estudiantes 2024", estado: "Activa", inscritos: 450, fecha: "2024-05-20" },
    { id: 2, titulo: "Apoyo Cultural GDL", estado: "Activa", inscritos: 120, fecha: "2024-06-15" }
];

function renderTable() {
    const tbody = document.getElementById('tabla-admin-convocatorias');
    tbody.innerHTML = '';

    convocatoriasAdmin.forEach(c => {
        tbody.innerHTML += `
            <tr>
                <td class="fw-bold">${c.titulo}</td>
                <td><span class="badge ${c.estado === 'Activa' ? 'bg-success' : 'bg-danger'}">${c.estado}</span></td>
                <td>${c.inscritos}</td>
                <td>${c.fecha}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger" onclick="eliminar(${c.id})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `;
    });
}

// Lógica para agregar nueva
document.getElementById('formNuevaConvocatoria').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('title').value;
    const fecha = document.getElementById('date').value;

    const nueva = {
        id: Date.now(),
        titulo: titulo,
        estado: "Activa",
        inscritos: 0,
        fecha: fecha
    };

    convocatoriasAdmin.push(nueva);
    renderTable();
    
    // Cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalConvocatoria'));
    modal.hide();
    alert("Convocatoria publicada con éxito");
});

function eliminar(id) {
    if(confirm("¿Seguro que quieres eliminar esta convocatoria?")) {
        convocatoriasAdmin = convocatoriasAdmin.filter(c => c.id !== id);
        renderTable();
    }
}

document.addEventListener('DOMContentLoaded', renderTable);