// 1. Datos de prueba (Simulando para que se vea algo maestra)
const convocatorias = [
    {
        id: 1,
        titulo: "Beca Jalisco 2024",
        descripcion: "Apoyo económico para estudiantes de nivel básico y media superior.",
        estado: "Activa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Secretar%C3%ADa_de_Educaci%C3%B3n_de_Jalisco_%282024-30%29.svg",
        fechaCierre: "20 de Mayo, 2024"
    },
    {
        id: 2,
        titulo: "Fondo a la Cultura",
        descripcion: "Financiamiento para proyectos artísticos y culturales regionales.",
        estado: "Activa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Secretar%C3%ADa_de_Educaci%C3%B3n_de_Jalisco_%282024-30%29.svg",
        fechaCierre: "15 de Junio, 2024"
    },
    {
        id: 3,
        titulo: "Apoyo al Campo",
        descripcion: "Subsidios para maquinaria y semillas en municipios rurales.",
        estado: "Cerrada",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Secretar%C3%ADa_de_Educaci%C3%B3n_de_Jalisco_%282024-30%29.svg",
        fechaCierre: "01 de Abril, 2024"
    }
];

function cargarConvocatorias() {
    const contenedor = document.getElementById('contenedor-convocatorias');
    contenedor.innerHTML = '';

    convocatorias.forEach(conv => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm card-convocatoria ${conv.estado === 'Cerrada' ? 'opacity-75' : ''}">
                    <div class="card-body text-center p-4">
                        <div class="mb-3">
                            <img src="${conv.imagen}" alt="Logo" style="width: 60px;" class="${conv.estado === 'Cerrada' ? 'grayscale-logo' : ''}">
                            <p class="text-muted small mt-2 mb-0">JALISCO</p>
                        </div>
                        <h5 class="text-jalisco fw-bold">${conv.titulo}</h5>
                        <p class="small text-muted">${conv.descripcion}</p>
                        <hr>
                        <p class="x-small mb-2">Cierra el: <strong>${conv.fechaCierre}</strong></p>
                        <span class="badge ${conv.estado === 'Activa' ? 'bg-success' : 'bg-danger'} mb-3">
                            ${conv.estado}
                        </span>
                        <br>
                        ${conv.estado === 'Activa' 
                            ? `<button class="btn btn-jalisco btn-sm text-white px-4" onclick="inscribirse(${conv.id})">Inscribirse</button>` 
                            : `<button class="btn btn-secondary btn-sm disabled">Cerrada</button>`
                        }
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += cardHtml;
    });
}

function inscribirse(id) {
    const conv = convocatorias.find(c => c.id === id);
    alert(`Te has inscrito exitosamente a: ${conv.titulo}`);
}

document.addEventListener('DOMContentLoaded', cargarConvocatorias);