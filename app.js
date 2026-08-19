// app.js - Lógica del portafolio

const btnTema = document.getElementById('btn-tema');
const cuerpo = document.body;
const iconoSol = document.getElementById('icono-sol');
const iconoLuna = document.getElementById('icono-luna');

btnTema.addEventListener('click', () => {
    cuerpo.classList.toggle('dark-mode');
    
    // Si tiene la clase dark-mode, mostramos el sol (para invitar al claro)
    if (cuerpo.classList.contains('dark-mode')) {
        iconoSol.style.display = 'block';
        iconoLuna.style.display = 'none';
    } else {
        // Si está en claro, mostramos la luna (para invitar al oscuro)
        iconoSol.style.display = 'none';
        iconoLuna.style.display = 'block';
    }
});