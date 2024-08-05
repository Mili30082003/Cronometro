let tiempo = 0;
let corriendo = false;
let intervalo;

function actualizarCronometro() {
    const horas = Math.floor(tiempo / 3600).toString().padStart(2, '0');
    const minutos = Math.floor((tiempo % 3600) / 60).toString().padStart(2, '0');
    const segundos = (tiempo % 60).toString().padStart(2, '0');

    document.getElementById('cronometro').textContent = `${horas}:${minutos}:${segundos}`;
}

function iniciarCronometro() {
    if (!corriendo) {
        corriendo = true;
        intervalo = setInterval(() => {
            tiempo++;
            actualizarCronometro();
        }, 1000);
    }
}

function pausarCronometro() {
    if (corriendo) {
        corriendo = false;
        clearInterval(intervalo);
    }
}

function resetearCronometro() {
    pausarCronometro();
    tiempo = 0;
    actualizarCronometro();
}