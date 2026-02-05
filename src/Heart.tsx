function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.setProperty('--heart-size', '30px');
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

export function sendLove() {
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
}