
(function() {
    if (localStorage.getItem('sesionActiva') !== 'true') {
        alert('Debes iniciar sesión primero.');
        window.location.href = 'login.html';
    }
})();


function cerrarSesion() {
    localStorage.removeItem('sesionActiva');
    window.location.href = 'login.html';
}