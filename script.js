
const startDate = new Date("2024-04-29T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = 
        `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function showSurprise() {
    const message = document.getElementById("surprise-message");
    if (message.style.display === "block") {
        message.style.display = "none";
    } else {
        message.style.display = "block";
        createHearts();
    }
}

function createHearts() {
    const body = document.querySelector("body");
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
