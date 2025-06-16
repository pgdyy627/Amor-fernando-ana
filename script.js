
function mostrarSurpresa() {
    document.getElementById('surpresa').style.display = 'block';
}
function atualizarContador() {
    const inicio = new Date('2024-04-29T00:00:00');
    const agora = new Date();
    const diff = agora - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);
    document.getElementById('contador').innerText =
        `${dias} dias, ${horas}h, ${minutos}m, ${segundos}s juntos 💞`;
}
setInterval(atualizarContador, 1000);
