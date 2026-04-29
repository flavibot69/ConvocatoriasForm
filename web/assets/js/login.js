document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const correoIngresado = document.getElementById('loginCorreo').value;
    const passIngresado = document.getElementById('loginPass').value;

    // Cuentas temporales
    const ADMIN_USER = {
        correo: "admin@jalisco.gob.mx",
        password: "admin123",
        nombre: "Administrador Global",
        rol: "admin"
    };

    const TEST_USER = {
        correo: "usuario@test.com",
        password: "user123",
        nombre: "Juan Pérez",
        rol: "usuario"
    };

    if (correoIngresado === ADMIN_USER.correo && passIngresado === ADMIN_USER.password) {
        localStorage.setItem('sesionActiva', 'true');
        localStorage.setItem('usuarioRegistrado', JSON.stringify(ADMIN_USER));
        window.location.href = 'admin.html'; 
    } 
    else if (correoIngresado === TEST_USER.correo && passIngresado === TEST_USER.password) {
        localStorage.setItem('sesionActiva', 'true');
        localStorage.setItem('usuarioRegistrado', JSON.stringify(TEST_USER));
        window.location.href = 'usuario.html';
    } 
    else {
        // Buscar si existe un usuario que se registró hace un momento en la otra página
        const userStored = JSON.parse(localStorage.getItem('usuarioRegistrado'));
        
        if (userStored && userStored.correo === correoIngresado && userStored.password === passIngresado) {
            localStorage.setItem('sesionActiva', 'true');
            window.location.href = 'usuario.html';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    }
});