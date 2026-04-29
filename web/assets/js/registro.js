document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = document.querySelectorAll('input');
    const select = document.querySelector('select');
    
    const nombre = inputs[0].value.trim();
    const correo = inputs[1].value.trim();
    const telefono = inputs[2].value.trim();
    const municipio = select.options[select.selectedIndex].text;
    const password = inputs[3].value;
    const terminos = document.getElementById('terminos').checked;

    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    if (!nombreRegex.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras, mínimo 3 caracteres).");
        return;
    }

    const telRegex = /^\d{10}$/;
    if (!telRegex.test(telefono.replace(/\s/g, ""))) {
        alert("El número de teléfono debe tener 10 dígitos y ser numérico, nada de letras.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (select.value === "") {
        alert("Por favor, selecciona un municipio.");
        return;
    }

    //por defecto es usuario, porque no pense eso en la documentacion pero shhhhh

    const nuevoUsuario = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        municipio: municipio,
        password: password,
        rol: "usuario" 
    };

    localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario));
    
    localStorage.setItem('sesionActiva', 'true');

    alert("¡Registro exitoso! Bienvenido " + nombre);

    window.location.href = 'usuario.html';
});