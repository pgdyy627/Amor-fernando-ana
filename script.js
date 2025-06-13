
// Contador ao vivo
const counterEl = document.getElementById('counter');
const startDate = new Date("2024-04-29T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  counterEl.textContent = `Estamos juntos há ${days} dias de puro amor! 💕`;
}
setInterval(updateCounter, 1000);
updateCounter();

// Botão de surpresa
document.getElementById('surpriseBtn').addEventListener('click', () => {
  document.getElementById('surprise').classList.toggle('hidden');
});
